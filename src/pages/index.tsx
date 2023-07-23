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
            className="px-5 py-3 bg-blue-600 text-white font-bold text-lg "
            onClick={() => signIn()}
          >
            Get Started
          </button>
        )}

        <div className="text-center max-w-lg">
          Swipe Survey helps you create polarized surveys, removes outliers, and
          take decisions without data analysis.
        </div>
        <iframe
          style={{
            width: "100%",
            height: "700px",
          }}
          src="/survey/clk9vyumf0013uuicf851e4k1"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
        {/* </div> */}

        <Features />

        <Usecase />
        {/* <Mermaid>{`
   graph TD
   1[Do you struggle with writing effectively?] -->|Yes| 2[Are you aware of the AI bot that helps you write better?]
   2 -->|Yes| 3[Do you understand how the AI bot works?]
   3 -->|Yes| 4[Is the AI bot suitable for your writing needs?]
   4 -->|Yes| 5[Are there any specific writing barriers you face?]
   5 -->|Yes| 6[Do you have access to the AI bot?]
   6 -->|Yes| 7[Are you willing to try using the AI bot for writing improvement?]
   7 -->|Yes| 8[Proceed to use the AI bot to enhance your writing]
   7 -->|No| 9[Identify the reasons for hesitation and address any concerns before using the AI bot.]
   6 -->|No| 10[You need to obtain access to the AI bot for writing improvement.]
   5 -->|No| 11[You may need to explore alternative solutions for writing improvement.]
   4 -->|No| 12[You need more information about how the AI bot can assist you.]
   3 -->|No| 13[You need to learn about the AI bot for writing improvement.]
   2 -->|No| 14[You may not need the AI bot for writing improvement.]
  `}</Mermaid> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
