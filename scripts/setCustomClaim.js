const admin = require("firebase-admin");
const serviceAccount = require("../firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Error: Some required arguments are missing.");
} else {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "admin",
      "x-hasura-allowed-roles": ["admin"],
      "x-hasura-user-id": args[0],
    },
  };

  admin
    .auth()
    .setCustomUserClaims(args[0], customClaims)
    .then(() => {
      console.log("Done.");
    })
    .catch((e) => {
      console.log(e);
    });
}
