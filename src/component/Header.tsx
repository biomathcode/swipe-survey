"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  return (
    <nav
      className="bg-neutral-900"
      style={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "60px",
        padding: "20px",
        borderBottom: "1px solid #eee",

        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
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
