import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/colors.css";
import Header from "@/component/Header";
import Seo from "@/component/SEO";
import NextNProgress from "nextjs-progressbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextNProgress color="#FFD8AA" height={5} />

      <Header />
      <Seo />

      <main
        style={{
          marginTop: "60px",
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
