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
      }}
    >
      <Link href="/" className=" underline">
        &gt;&gt;Swipe Survey
      </Link>
    </nav>
  );
}

export default Header;
