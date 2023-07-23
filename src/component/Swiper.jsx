import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Stack } from "./component/stack";
import styled from "styled-components";
import { Traffics } from "./component/Traffic";
import { useSession } from "next-auth/react";

const Wrapper = styled(Stack)`
  background: #fff;
  border: ${(props) => `4px solid ${props.border}`};
  font-size: 14px;

  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.25);
  margin: 10px;
  min-height: 300px;
  min-width: 300px;
`;

const Item = styled.div`
  width: 240px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: #f8f8f8;
  color: #000000;
  border-radius: 8px;
`;

export default function Swiper({ questions, isPreview = true }) {
  const [border, setBorder] = useState("#f4f4f4");
  const [traffic, setTraffic] = useState(["red", "yellow", "green"]);

  const [previous, setPrevious] = useState("#f4f4f4");

  function blink() {
    const light = setInterval(() => {
      const data = previous === "#f4f4f4" ? "red" : "white";
      setPrevious(data);
    }, 300);
    setTimeout(() => {
      clearInterval(light);
      setPrevious("white");
    }, 1000);
  }

  return (
    <main
      style={{ width: "50vw", minWidth: "200px" }}
      className="  flex-col items-center justify-between md:p-24 p-4  bg-white text-black "
    >
      <Traffics traffic={traffic} />

      <Wrapper
        border={border}
        setBorder={setBorder}
        setTraffic={setTraffic}
        blink={blink}
        onVote={async (item, vote) => {
          if (!isPreview) {
            const body = {
              questionId: item.props["data-value"],
              userId: "sharma.pratik2016@gmail.com",
              value: String(vote),
            };
            const createResponse = await fetch("/api/response", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });

            const res = await createResponse.json();
            console.log(res);
          }
        }}
      >
        {questions?.map((el) => (
          <Item
            className="text-lg md:text-2xl"
            borderColor={previous}
            data-value={el.id}
            whileTap={{ scale: 1.15 }}
            key={el.id}
          >
            {el.content}
          </Item>
        ))}
      </Wrapper>
    </main>
  );
}
