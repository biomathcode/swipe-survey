"use client";

import { useChat } from "ai/react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Chat({ setQuestions }: { setQuestions: any }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  const { data: session } = useSession();

  const router = useRouter();

  const surveyid = router.query.id;

  const handleAddQuestion = async (id: string) => {
    const ai_message = messages.filter(
      (e) => e.id === id && e.role === "assistant"
    );

    const text = ai_message[0]?.content;

    const regex = /\d+\.\s*([^.]+)(?=\s*\d+\.|$)/g;

    const matches = text.match(regex);

    console.log(matches);

    if (matches) {
      const sentences = matches.map((match) =>
        match.replace(/^\d+\.\s*/, "").trim()
      );
      const response = await axios.post("/api/question", {
        content: sentences,
        surveyId: surveyid,
        email: session?.user?.email,
      });

      console.log("createmultiplequesion", response);

      setTimeout(() => {
        location.reload();
      }, 1500);
    }
    console.log(id, ai_message);
  };

  return (
    <div className="mx-auto w-full max-w-md  flex flex-col stretch">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 w-full min-w-full content-center items-center"
      >
        {/* <label> */}
        <input
          className=" bottom-0 border w-full border-gray-300 rounded   p-2"
          value={input}
          placeholder="Create 10 Questions to ask customer"
          onChange={handleInputChange}
        />
        {/* </label> */}
        <button
          className="bg-neutral-900 text-white  hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
          type="submit"
          disabled={isLoading}
        >
          Send
        </button>
      </form>

      <div style={{ maxHeight: "500px", overflow: "auto", marginTop: "10px" }}>
        {messages.map((m) => {
          return (
            <div
              className="py-4"
              key={m.id}
              style={{ overflow: "hidden", maxWidth: "500px" }}
            >
              <span className="font-bold">
                {m.role === "user" ? "User: " : "AI: "}
              </span>
              {m.content}
              <div>
                {m.role === "assistant" && (
                  <button
                    onClick={() => handleAddQuestion(m.id)}
                    disabled={isLoading}
                    className="bg-neutral-900 text-white  gap-1  hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  >
                    <PlusIcon /> Questions
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
