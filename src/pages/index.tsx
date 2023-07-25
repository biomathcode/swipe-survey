import Features from "@/component/Features";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { Mermaid } from "@/component/MermaidChart";
import Usecase from "@/component/Usecase";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
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
        {/* <Mermaid>{`
graph LR
    1[Do you have a need or problem that the product aims to solve?] -->|Yes| 2[Are you aware of the product?]
    1 -->|No| 14[You may not need the product.]
    2 -->|Yes| 3[Do you understand how the product works?]
    2 -->|No| 13[You need to learn about the product]
    3 -->|Yes| 4[Is the product suitable for your specific needs?]
    3 -->|No| 12[You need more information]
    4 -->|Yes| 5[Are there any potential barriers to using the product?]
    4 -->|No| 11[You may need to explore alternative products]
    5 -->|Yes| 6[Do you have access to the product?]
    5 -->|No| 10[You need to find a way to obtain the product]
    6 -->|Yes| 7[Are you willing to try the product?]
    6 -->|No| 10[You need to find a way to obtain the product]
    7 -->|Yes| 8[Proceed to use the product]
    7 -->|No| 9[Identify the reasons for hesitation and address any concerns]

  `}</Mermaid> */}
        <div
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",

            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
            borderRadius: "50px",
          }}
          className="bg-pink-100 md:p-0 p-10"
        >
          <div className="flex flex-col gap-4 m-2 justify-center content-center items-center">
            <h1 className="text-4xl m-2 font-semibold">How it works?</h1>
            <p className="text-lg">Surveys can be simple and more realistic.</p>
          </div>

          <Image
            src={"/demo.gif"}
            width={640}
            height={360}
            style={{
              width: "90vw",
              maxWidth: "900px",
              minHeight: "400px",
            }}
            className=" rounded-lg "
            alt="Demo of how swipe survey works "
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
