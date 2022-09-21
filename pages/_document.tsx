import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

import { url } from "lib/util";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <script />
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={url("apple-touch-icon.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={url("favicon-32x32.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={url("favicon-16x16.png")}
          />
          <link rel="manifest" href={url("site.webmanifest")} />
          <link
            rel="mask-icon"
            href={url("safari-pinned-tab.svg")}
            color="#e3a900"
          />
          <link rel="shortcut icon" href={url("favicon.ico")} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content={url("browserconfig.xml")}
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body id="myapp">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
