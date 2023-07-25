import Features from "@/component/Features";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Usecase from "@/component/Usecase";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

function App() {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      <div className="min-w-full flex flex-col gap-10 justify-center content-center items-center ">
        <div className="md:text-6xl text-2xl mt-32 min-w-full flex text-center justify-center">
          <h1 style={{ lineHeight: " 100px" }} className="	">
            Surveys which leads to <br />{" "}
            <span className="font-bold underline">Decision Making </span>
          </h1>
        </div>

        {session ? (
          <Link
            className="px-5 py-3 bg-neutral-900 text-white font-bold text-md rounded-lg "
            href="/survey"
          >
            Go To Survey
          </Link>
        ) : (
          <button
            className="px-5 py-3 rounded-sm bg-blue-600 text-white font-bold text-lg "
            onClick={() => signIn()}
          >
            Get Started
          </button>
        )}

        <div className="text-center max-w-lg">
          Swipe Survey helps you create precise surveys, removes outliers, and
          take decisions without data analysis.
        </div>
        <iframe
          style={{
            width: "100%",
            height: "700px",
          }}
          src="/survey/clkfbocww0006uupqjcfy6xuu"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
        {/* </div> */}

        <Features />

        <Usecase />

        <Footer />
      </div>
    </>
  );
}

export default App;
