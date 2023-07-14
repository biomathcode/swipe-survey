"use client";

import React, { useState, Children } from "react";
import styled from "styled-components";
import { Card } from "./card";

// basic default styles for container
const Frame = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Stack = ({
  setTraffic,
  onVote,
  children,
  setBorder,
  ...props
}) => {
  const [stack, setStack] = useState(Children.toArray(children));

  // return new array with last item removed
  const pop = (array) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  const handleVote = (item, vote) => {
    // update the stack
    let newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote);
  };

  return (
    <>
      <Frame {...props}>
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1;

          console.log("this is the stack data", item);
          return (
            <Card
              setTraffic={setTraffic}
              setBorder={setBorder}
              drag={isTop} // Only top card is draggable
              key={item.key || index}
              onVote={(result) => handleVote(item, result)}
            >
              {item}
            </Card>
          );
        })}
      </Frame>
    </>
  );
};
