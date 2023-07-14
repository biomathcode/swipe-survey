"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <nav
      className="bg-neutral-900"
      style={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "50px",
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
        &gt;&gt;Swipe Survey
      </Link>
      <div className="flex flex-row gap-10">
        <button onClick={() => signIn()}>Login</button>
        <Link href="/solution">Solutions</Link>
        <Link href="/product">Products</Link>
      </div>
    </nav>
  );
}

export default Header;
