import { LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DoughFigure from "./DoughFigure";

interface IDoughFigures {
  numberOfDoughs: number;
  doughWeight?: number;
  firstRender: boolean;
}

const SDoughContainer = styled.div`
  margin: -8px -32px auto -32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  align-self: center;
  align-content: center;
  justify-self: center;
  justify-content: center;
  max-width: 400px;
`;

export type AnimationVariant = "noDoughs" | "doughWeight";

const DoughFigures = ({
  numberOfDoughs,
  doughWeight = 250,
  firstRender,
}: IDoughFigures) => {
  const [animationVariant, setAnimationVariant] =
    useState<AnimationVariant>("noDoughs");

  useEffect(() => {
    setAnimationVariant("doughWeight");
  }, [doughWeight]);

  useEffect(() => {
    setAnimationVariant("noDoughs");
  }, [numberOfDoughs]);

  return (
    <SDoughContainer>
      {Array.from(Array(numberOfDoughs < 15 ? numberOfDoughs : 15).keys()).map(
        (num) => {
          const shouldAnimate =
            (num === numberOfDoughs - 1 ||
              animationVariant === "doughWeight") &&
            !firstRender;
          return (
            <DoughFigure
              doughWeight={doughWeight}
              key={`${num}-${doughWeight}-${numberOfDoughs}`}
              shouldAnimate={shouldAnimate}
              animationVariant={animationVariant}
              firstRender={firstRender}
            />
          );
        }
      )}
    </SDoughContainer>
  );
};

export default DoughFigures;
