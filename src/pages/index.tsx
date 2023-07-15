import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

function App() {
  const { data: session } = useSession();
  return (
    <div className="min-w-full flex flex-col gap-10 justify-center content-center items-center ">
      <div className="mt-20 text-6xl min-w-full flex text-center justify-center">
        <h1 className="	">
          Surveys which leads to <br />{" "}
          <span className="font-bold underline">Decision Making </span>
        </h1>
      </div>

      <div
        style={{
          width: "60vw",
        }}
        className=" h-96 bg-neutral-800 rounded-lg"
      ></div>
      {session ? (
        <Link href="/survey">Go To Survey</Link>
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
    </div>
  );
}

export default App;
