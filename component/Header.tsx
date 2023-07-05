// Header

import Link from "next/link";

function Header() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "50px",
        padding: "20px",
        borderBottom: "1px solid #eee",
        background: "#000",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/" className=" underline">
        &gt;&gt;Swipe Survey
      </Link>
      <div className="flex flex-row " style={{ gap: "10px" }}>
        <Link href="/login">Login</Link>
        <Link href="/solution">Solutions</Link>
        <Link href="/product">Products</Link>
      </div>
    </nav>
  );
}

export default Header;
