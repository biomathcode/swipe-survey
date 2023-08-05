"use client";

import { useChat } from "ai/react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

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
        >
          Send
        </button>
      </form>

      <div style={{ maxHeight: "500px", overflow: "auto", marginTop: "10px" }}>
        {messages.map((m) => {
          console.log(m);

          return (
            <div key={m.id} style={{ overflow: "hidden", maxWidth: "500px" }}>
              <span className="font-bold">
                {m.role === "user" ? "User: " : "AI: "}
              </span>
              {m.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
