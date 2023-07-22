"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

type HeaderProps = {
  theme?: "light" | "dark";
};

const Themes = {
  light: {
    background: "#FEFFFE",
    color: "#272626",
  },
  dark: {
    background: "#272626",
    color: "#FEFFFE",
  },
};

function Header({ theme = "light" }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <nav
      // className="bg-neutral-900"
      style={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "60px",
        padding: "20px",
        borderBottom: "1px solid #eee",
        // color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        ...Themes[theme],
      }}
    >
      <Link href="/" className=" ">
        <div className="flex gap-2 items-center content-center">
          <img
            alt="swipe survey logo"
            src="/favicon/android-chrome-192x192.png"
            className="p-1 rounded-xl w-10 h-10"
          />
          <div className="text-lg">SwipeSurvey</div>
        </div>
      </Link>
      {!session ? (
        <div className="flex flex-row gap-10">
          <button onClick={() => signIn()}>Login</button>
          <Link href="/solution">Solutions</Link>
          <Link href="/product">Products</Link>
          <Link href="/changes">Changelog</Link>
          <Link
            href="https://github.com/biomathcode/swipe-survey"
            className="flex center items-center content-center "
          >
            <GitHubLogoIcon />
          </Link>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-10">
          <Link href="/survey">Survey</Link>

          <div className="flex gap-3 items-center ">
            <img
              alt="profile_image"
              src={session.user?.image || ""}
              className="p-1 rounded-xl w-10 h-10"
            />
            {session.user?.name}{" "}
          </div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
