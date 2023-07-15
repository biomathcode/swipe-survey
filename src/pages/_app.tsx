import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/colors.css";
import Header from "@/component/Header";
import Seo from "@/component/SEO";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Seo />

      <Component {...pageProps} />
    </SessionProvider>
  );
}
