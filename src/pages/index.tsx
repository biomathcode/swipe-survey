import Features from "@/component/Features";
import Footer from "@/component/Footer";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

function App() {
  const { data: session } = useSession();
  return (
    <>
      <div className="min-w-full flex flex-col gap-10 justify-center content-center items-center ">
        <div className="text-6xl mt-32 min-w-full flex text-center justify-center">
          <h1 style={{ lineHeight: " 120px" }} className="	">
            Surveys which leads to <br />{" "}
            <span className="font-bold underline">Decision Making </span>
          </h1>
        </div>

        <div
          style={{
            width: "60vw",
            height: "600px",
          }}
          className=" h-96 bg-neutral-800 rounded-lg"
        ></div>
        {session ? (
          <Link
            className="px-5 py-3 bg-neutral-900 text-white font-bold text-md rounded-lg "
            href="/survey"
          >
            Go To Survey
          </Link>
        ) : (
          <button
            className="px-5 py-3 bg-neutral-900 text-white font-bold text-lg "
            onClick={() => signIn()}
          >
            Get Started
          </button>
        )}

        <div>
          Swipe Survey helps you create polarized surveys, removes outliers, and
          take decisions without data analysis.
        </div>
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
