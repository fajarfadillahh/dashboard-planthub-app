import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider, getSession, signOut } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  useEffect(() => {
    window.onfocus = async () => {
      if (router.asPath !== "/") {
        const session = await getSession();

        if (!session) {
          await signOut({
            redirect: false,
            callbackUrl: "/",
          });

          router.push("/");
        }
      }
    };
  }, [router]);

  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}
