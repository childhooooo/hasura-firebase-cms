import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import formidable from "formidable";
// @ts-ignore
import { ImagePool } from "@squoosh/lib";
import { cpus } from "os";
import fs from "fs/promises";
import {
  StorageReference,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import { firebaseApp } from "lib/firebase";

export const config = {
  api: {
    bodyParser: false,
  },
};

const sizes = [2000, 1600, 1200, 800];
const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "";
const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

type ResponseData = {
  isSuccess: boolean;
  message: string | null;
};

type HandleResult = {
  isSuccess: boolean;
  status: number;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let result: HandleResult;

  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    result = await new Promise((resolve, _reject) => {
      form.parse(req, async (_error, _fields, files) => {
        try {
          const auth = getAuth();
          await signInWithEmailAndPassword(
            auth,
            process.env.ADMIN_EMAIL || "",
            process.env.ADMIN_PASSWORD || ""
          );
        } catch (e) {
          resolve({
            isSuccess: false,
            status: 500,
            message: "Failed to sign-in to Firebase.",
          });
        }

        const data = Array.isArray(files.image) ? files.image[0] : files.image;

        if (!data || !data.originalFilename) {
          resolve({
            isSuccess: false,
            status: 400,
            message: "Missing data.",
          });
        }

        let images: EncodedImage[] = [];
        try {
          images = await encode(data);
        } catch (e: any) {
          resolve({
            isSuccess: false,
            status: 500,
            message: e.message,
          });
        }

        if (!images || images.length < 1) {
          resolve({
            isSuccess: false,
            status: 500,
            message: "Unexpected error.",
          });
        }

        const uploadResult = await upload(images);

        if (!uploadResult.isSuccess) {
          for (const u of uploadResult.uploadedRefs) {
            deleteObject(u);
          }

          resolve({
            isSuccess: false,
            status: 500,
            message: "Failed to upload some images.",
          });
        }

        try {
          insert(images[0].baseName, images[0].fileType, uploadResult.files);
        } catch (e: any) {
          resolve({
            isSuccess: false,
            status: 500,
            message: `Failed to insert image: ${e.message}`,
          });
        }

        resolve({
          isSuccess: true,
          status: 200,
          message: "",
        });
      });
    });
  } else {
    result = {
      isSuccess: false,
      status: 405,
      message: "Method not allowed",
    };
  }

  res.status(result.status).json({
    isSuccess: result.isSuccess,
    message: result.message,
  });
}

type EncodedImage = {
  baseName: string;
  fileType: "jpg" | "png";
  size: number;
  image: any;
};

async function encode(data: any): Promise<EncodedImage[]> {
  const imagePool = new ImagePool(cpus().length);

  try {
    let fileType: "jpg" | "png";
    let resizeMethod: "triangle" | "catrom" | "mitchell" | "lanczos3";
    let otherOptions: any = {};
    if (/\.(jpe?g)$/i.test(data.originalFilename || "")) {
      fileType = "jpg";
      resizeMethod = "lanczos3";
    } else if (/\.(png)$/i.test(data.originalFilename || "")) {
      fileType = "png";
      resizeMethod = "mitchell";
      otherOptions = {
        quant: {
          numColors: 128,
          dither: 0.9,
        },
      };
    } else {
      throw new Error("Failed to encode image: Invalid format.");
    }

    const baseName = `${data.originalFilename.split(".")[0] || "noname"}-${
      data.newFilename
    }`;

    const file = await fs.readFile(data.filepath);

    const images: EncodedImage[] = [];
    for (let i = 0; i < sizes.length; i++) {
      images.push({
        baseName,
        fileType,
        size: sizes[i],
        image: imagePool.ingestImage(file),
      });
    }

    const preprocesses = images.map((image: EncodedImage) => {
      return image.image.preprocess({
        resize: {
          width: image.size,
          method: resizeMethod,
        },
        ...otherOptions,
      });
    });

    await Promise.all(preprocesses);

    const encodes = images.map((i) => {
      if (fileType === "jpg") {
        return i.image.encode({
          mozjpeg: {},
          webp: { near_lossless: 50, use_sharp_yuv: 1 },
        });
      } else if (fileType === "png") {
        return i.image.encode({
          oxipng: {
            level: 6,
          },
          webp: { near_lossless: 50, use_sharp_yuv: 1 },
        });
      } else {
        return null;
      }
    });

    await Promise.all(encodes);
    imagePool.close();
    return images;
  } catch (e: any) {
    imagePool.close();
    throw new Error(`Failed to encode image: ${e.message}`);
  }
}

type UploadedFile = {
  label: string;
  url: string;
  firebase_path: string;
};

type UploadResult = {
  isSuccess: boolean;
  uploadedRefs: StorageReference[];
  files: UploadedFile[];
};

async function upload(images: EncodedImage[]): Promise<UploadResult> {
  const storage = getStorage(firebaseApp);
  const uploadedRefs: StorageReference[] = [];
  const files: UploadedFile[] = [];
  const uploads = images
    .map((i: any) => {
      if (i.image.encodedWith.mozjpeg) {
        const jpgPath = `medias/${i.baseName}@${i.size}.${i.fileType}`;
        const webpPath = `medias/${i.baseName}@${i.size}.webp`;
        const jpgRef = ref(storage, jpgPath);
        const webpRef = ref(storage, webpPath);

        return [
          (async () => {
            try {
              const jpg = await i.image.encodedWith.mozjpeg;
              const r = await uploadBytes(jpgRef, jpg.binary, {
                contentType: "image/jpeg",
              });
              uploadedRefs.push(r.ref);
              files.push({
                label: i.size.toString(10),
                url: await getDownloadURL(r.ref),
                firebase_path: jpgPath,
              });
              return true;
            } catch (e) {
              return false;
            }
          })(),
          (async () => {
            try {
              const webp = await i.image.encodedWith.webp;
              const r = await uploadBytes(webpRef, webp.binary, {
                contentType: "image/webp",
              });
              uploadedRefs.push(r.ref);
              files.push({
                label: `${i.size}-webp`,
                url: await getDownloadURL(r.ref),
                firebase_path: webpPath,
              });
              return true;
            } catch (_e) {
              return false;
            }
          })(),
        ];
      } else if (i.image.encodedWith.oxipng) {
        const pngPath = `medias/${i.baseName}@${i.size}.${i.fileType}`;
        const webpPath = `medias/${i.baseName}@${i.size}.webp`;
        const pngRef = ref(storage, pngPath);
        const webpRef = ref(storage, webpPath);

        return [
          (async () => {
            try {
              const png = await i.image.encodedWith.oxipng;
              const r = await uploadBytes(pngRef, png.binary, {
                contentType: "image/png",
              });
              uploadedRefs.push(r.ref);
              files.push({
                label: i.size.toString(10),
                url: await getDownloadURL(r.ref),
                firebase_path: pngPath,
              });
              return true;
            } catch (_e) {
              return false;
            }
          })(),
          (async () => {
            try {
              const webp = await i.image.encodedWith.webp;
              const r = await uploadBytes(webpRef, webp.binary, {
                contentType: "image/webp",
              });
              uploadedRefs.push(r.ref);
              files.push({
                label: `${i.size}-webp`,
                url: await getDownloadURL(r.ref),
                firebase_path: webpPath,
              });
              return true;
            } catch (_e) {
              return false;
            }
          })(),
        ];
      } else {
        return [];
      }
    })
    .flat();

  const results = await Promise.all(uploads);

  if (results.includes(false)) {
    return {
      isSuccess: false,
      uploadedRefs,
      files,
    };
  }

  return {
    isSuccess: true,
    uploadedRefs,
    files,
  };
}

async function insert(
  baseName: string,
  fileType: "jpg" | "png",
  files: UploadedFile[]
): Promise<void> {
  let res;
  try {
    let mediaType = "unknown";
    if (fileType === "jpg") {
      mediaType = "image/jpeg";
    } else if (fileType === "png") {
      mediaType = "image/png";
    }

    res = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": hasuraAdminSecret,
        "x-hasura-role": "admin",
      },
      body: JSON.stringify({
        query: `
mutation CreateMedia(
  $name: String!
  $url: String!
  $media_type: String!
  $files: [file_insert_input!] = []
) {
  insert_media_one(
    object: {
      name: $name
      url: $url
      media_type: $media_type
      files: { data: $files }
    }
  ) {
    id
  }
}
          `,
        variables: {
          name: baseName,
          url: files[0].url,
          media_type: mediaType,
          files,
        },
      }),
    });

    const { errors } = await res.json();
    if (errors && errors.length > 0) {
      console.log(errors);
      throw new Error("GraphQL error");
    }
  } catch (e: any) {
    throw new Error(`Network error: ${e.message}`);
  }

  if (!res?.ok) {
    throw new Error(`Failed to insert media: ${res?.statusText}`);
  }
}
