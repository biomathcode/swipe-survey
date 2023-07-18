// traffic light component
"use client";

import styled from "styled-components";

const TrafficLight = styled.div`
  z-index: 2;
  position: relative;

  display: flex;
  gap: 10px;
  right: -15px;
  top: 50px;
  border: 4px solid #eeeeee;
  border-radius: 5px;
  padding: 7px;
  width: fit-content;
  height: fit-content;
`;

const RedLight = styled.div`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.color === "red" ? "#eb5a45" : "none")};
  border-radius: 50%;
`;

const YellowLight = styled.div`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.color === "yellow" ? "#f5ac3e" : "none")};
  border-radius: 50%;
`;

const GreenLight = styled.div`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.color === "green" ? "#b3cc30" : "none")};
  border-radius: 50%;
`;

export const Traffics = ({ traffic }: { traffic: any }) => {
  return (
    <TrafficLight>
      <RedLight color={traffic[0]} />
      <YellowLight color={traffic[1]} />
      <GreenLight color={traffic[2]} />
    </TrafficLight>
  );
};
