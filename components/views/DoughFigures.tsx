import { useEffect, useState } from "react";
import styled from "styled-components";
import DoughFigure from "./DoughFigure";

interface IDoughFigures {
  numberOfDoughs: number;
  doughWeight?: number;
  isInitialRender: boolean;
}

const SDoughContainer = styled.div<{ isInitialRender: boolean }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
  max-height: 394px;
`;

export type AnimationVariant = "noDoughs" | "doughWeight";

const DoughFigures = ({
  numberOfDoughs,
  doughWeight = 250,
  isInitialRender,
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
    <SDoughContainer isInitialRender={isInitialRender}>
      {Array.from(Array(numberOfDoughs < 20 ? numberOfDoughs : 20).keys()).map(
        (num) => {
          const shouldAnimate =
            ((num > 3 && num === numberOfDoughs - 1) ||
              animationVariant === "doughWeight") &&
            !isInitialRender;
          return (
            <DoughFigure
              doughWeight={doughWeight}
              key={`${num}-${doughWeight}-${numberOfDoughs}`}
              shouldAnimate={shouldAnimate}
              animationVariant={animationVariant}
              isInitialRender={isInitialRender}
            />
          );
        }
      )}
    </SDoughContainer>
  );
};

export default DoughFigures;
