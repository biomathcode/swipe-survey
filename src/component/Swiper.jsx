"use client";

import React, { useState } from "react";

import { Stack } from "./component/stack";
import styled from "styled-components";
import { Traffics } from "./component/Traffic";

const Wrapper = styled(Stack)`
  background: #363333;
  border: 4px solid #585555;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.75);
  margin: 10px;
  min-height: 300px;
`;

const Item = styled.div`
  background: #f9fafb;
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: #363333;
  color: #7b7878;
  border-radius: 8px;
`;

export default function Swiper({ data }) {
  const [border, setBorder] = useState("#585555");
  const [traffic, setTraffic] = useState(["red", "yellow", "green"]);

  const items = data.question.map((e) => ({
    id: e.id,
    question: e.content,
  }));

  console.log("this is data", items);

  return (
    <main className=" min-h-screen flex-col items-center justify-between p-24 bg-white text-black ">
      <Traffics traffic={traffic} />
      <Wrapper
        border={border}
        setBorder={setBorder}
        setTraffic={setTraffic}
        onVote={(item, vote) => console.log(item.props, vote)}
      >
        {items?.map((el) => (
          <Item
            borderColor={border}
            data-value={el.id}
            whileTap={{ scale: 1.15 }}
            key={el.id}
          >
            {el.question}
          </Item>
        ))}
      </Wrapper>
    </main>
  );
}