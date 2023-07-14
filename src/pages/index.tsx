import Seo from "@/component/SEO";
import Header from "../component/Header";
import { signIn } from "next-auth/react";

function App() {
  return (
    <div className="min-w-full flex flex-col gap-10 justify-center content-center items-center ">
      <Seo />
      <div className="mt-20 text-6xl min-w-full flex text-center justify-center">
        <h1 className="	">
          Surveys which leads to <br />{" "}
          <span className="font-bold underline">Decision Making </span>
        </h1>
      </div>

      <div
        style={{
          width: "90vh",
        }}
        className=" h-96 bg-neutral-800"
      ></div>
      <button
        className="px-5 py-3 bg-neutral-900 text-white font-bold text-lg "
        onClick={() => signIn()}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
