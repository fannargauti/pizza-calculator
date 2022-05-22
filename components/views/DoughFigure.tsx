import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { AnimationVariant } from "./DoughFigures";

interface IDoughFigure {
  doughWeight: number;
  shouldAnimate: boolean;
  animationVariant: AnimationVariant;
  isInitialRender?: boolean;
}

interface IStyledDoughFigure {
  doughWeight: number;
}

const SDoughFigure = styled(motion.span)<IStyledDoughFigure>`
  height: ${(props) => `${getDoughSize(props.doughWeight)}px`};
  width: ${(props) => `${getDoughSize(props.doughWeight)}px`};
  border-radius: 40%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 245, 223, 1) 0%,
    rgba(255, 243, 195, 1) 56%,
    rgba(255, 242, 178, 1) 100%
  );
  border-color: tomato;
  border-width: 5px;
`;

function getDoughSize(doughWeight: number): number {
  const defaultSize = 100;
  const defaultWeight = 250;
  const increasePercent = doughWeight / defaultWeight;
  const size = defaultSize * increasePercent;
  return size + increasePercent;
}

const DoughFigure = ({
  doughWeight,
  shouldAnimate,
  animationVariant,
  isInitialRender,
}: IDoughFigure) => {
  const controls = useAnimation();
  const variants = {
    doughWeight: {
      scale: [1.1, 0.95, 1],
      transition: { duration: 0.3 },
    },
    noDoughs: {
      scale: [2, 0.95, 1],
      transition: { duration: 0.5 },
    },
    intro: {
      scale: [50, 0.95, 1.05, 0.99, 1.02, 1, 0.99, 1.01],
      transition: {
        duration: 3,
        delay: Math.random() * (0.4 - 0.2) + 0.2,
        times: [0, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 0.98],
      },
    },
  };
  if (isInitialRender) {
    controls.start(variants.intro);
  } else if (shouldAnimate) {
    controls.start(variants[animationVariant]);
  }
  return <SDoughFigure animate={controls} doughWeight={doughWeight} />;
};

export default DoughFigure;
