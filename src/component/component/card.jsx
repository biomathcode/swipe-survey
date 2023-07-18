"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

const StyledCard = styled(motion.div)`
  position: absolute;
`;

export const Card = ({
  setTraffic,
  children,
  setBorder,
  style,
  onVote,
  id,
  ...props
}) => {
  const cardElem = useRef(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = useState(true);

  const [direction, setDirection] = useState();

  const [velocity, setVelocity] = useState();

  let rotateMv = useTransform(x, [-200, 200], [-50, 50]);
  let opacityMv = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0.5]);

  const getVote = (childNode, parentNode) => {
    const childRect = childNode.getBoundingClientRect();
    const parentRect = parentNode.getBoundingClientRect();
    let result =
      parentRect.left >= childRect.right
        ? false
        : parentRect.right <= childRect.left
        ? true
        : undefined;
    return result;
  };

  // determine direction of swipe based on velocity
  const getDirection = () => {
    return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  const flyAway = (min) => {
    setTraffic(["none", "yellow", "none"]);

    setBorder("#eeeeee");
    const flyAwayDistance = (direction) => {
      const parentWidth =
        cardElem.current.parentNode.getBoundingClientRect().width;
      const childWidth = cardElem.current.getBoundingClientRect().width;
      return direction === "left"
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2;
    };

    if (direction && Math.abs(velocity) > min) {
      setConstrained(false);
      controls.start({
        x: flyAwayDistance(direction),
        background: "none",
      });
      if (direction === "right") {
        controls.set({ background: "red" });
      }
      if (direction === "left") {
        controls.set({ background: "green" });
      }
    }
  };

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      const childNode = cardElem.current;
      const parentNode = cardElem.current.parentNode;
      const result = getVote(childNode, parentNode);
      result !== undefined && onVote(result);
    });

    return () => unsubscribeX();
  });

  useEffect(() => {
    if (direction === "right") {
      setTraffic(["none", "none", "green"]);
      setBorder("#B3CC30");
    } else if (direction === "left") {
      setTraffic(["red", "none", "none"]);
      setBorder("#EB5A45");
    }
    if (x === 0) {
      setTraffic(["none", "yellow", "none"]);
      setBorder("#eeeeee");
    }
  }, [x, setBorder, direction, controls, setTraffic]);

  console.log(props, style);

  return (
    <StyledCard
      animate={controls}
      drag={"x"}
      dragConstraints={
        constrained && { left: 10, right: 10, top: 10, bottom: 10 }
      }
      dragElastic={0.64}
      ref={cardElem}
      style={{
        x,
        opacity: opacityMv,
        rotate: rotateMv,
      }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(500)}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
