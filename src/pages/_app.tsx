import "@/assets/styles/global.scss";
import { theme } from "@/theme/palette";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import React from "react";
import { ErrorBoundary, Provider } from "@rollbar/react"; // Provider imports 'rollbar'
import Rollbar from "rollbar";

//NEXT FONT OPTIMIZATION
import { iranSans } from "@/utils/fontsConfig";

export default function App({ Component, pageProps }: AppProps) {
  const rollbarConfig = {
    accessToken:"4f2499aab47541e9b727bd9e4470a227",
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: "testenv",
  };

  function TestError() {
    const a = null;
    return a.hello();
  }

  return (
    <>
      <style
        jsx
        global
      >{`
        html:root {
          --font-iranSans: ${iranSans.style.fontFamily};
        }
      `}</style>
      <Provider config={rollbarConfig}>
        {/* <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider> */}
        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>
      </Provider>
    </>
  );
}
