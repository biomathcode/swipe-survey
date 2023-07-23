"use client";

import React, {
  useState,
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { Card } from "./card";

// basic default styles for container

const useStackHook = (children) => {
  const [stack, setStack] = useState(Children.toArray(children).reverse());

  // useEffect(() => {

  // }, [children])

  console.log("this shoudl stacK", children);

  return { stack, setStack };
};

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
  blink,
  ...props
}) => {
  // return new array with last item removed
  const { stack, setStack } = useStackHook(children);

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
    blink();
  };

  return (
    <>
      <Frame {...props}>
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1;

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
        {<div>Thanks for your feedback</div>}
      </Frame>
    </>
  );
};
