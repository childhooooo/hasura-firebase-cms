import type { AppProps } from "next/app";
import Head from "next/head";
import { UnflexibleProvider } from "unflexible-ui-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../node_modules/quill/dist/quill.core.css";
import "../node_modules/quill/dist/quill.snow.css";

const config = {
  stacked: {
    padding: {
      wide: "120px",
      normal: "60px",
      narrow: "30px",
      thin: "15px",
    },
    gap: {
      wide: "3rem",
      normal: "1.5rem",
      narrow: ".75rem",
      thin: ".5rem",
    },
  },
  wrap: {
    widthXL: "90%",
    widthL: "90%",
    widthM: "90%",
    widthS: "94%",
    widthXS: "94%",
  },
  plainText: {
    h1Size: {
      xl: "1.5rem",
      l: "1.5rem",
      m: "1.5rem",
      s: "1.25rem",
      xs: "1.25rem",
    },
    h2Size: {
      xl: "1.25rem",
      l: "1.25rem",
      m: "1.25rem",
      s: "1.1rem",
      xs: "1.1rem",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <UnflexibleProvider config={config}>
        <QueryClientProvider client={new QueryClient()}>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UnflexibleProvider>
    </>
  );
}

export default MyApp;
