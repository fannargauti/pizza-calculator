import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { AnimationVariant } from "./DoughFigures";

interface IDoughFigure {
  doughWeight: number;
  shouldAnimate: boolean;
  animationVariant: AnimationVariant;
  firstRender?: boolean;
}

interface IStyledDoughFigure {
  $doughWeight: number;
}

const SDoughFigure = styled(motion.span)<IStyledDoughFigure>`
  margin: -3px 0px;
  height: ${(props) => `${getDoughSize(props.$doughWeight)}px`};
  width: ${(props) => `${getDoughSize(props.$doughWeight)}px`};
  border-radius: 40%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 245, 223, 1) 0%,
    rgba(255, 243, 195, 1) 56%,
    rgba(255, 242, 178, 1) 100%
  );
  border: 1px solid #ffe993;
`;

function getDoughSize(doughWeight: number): number {
  const defaultSize = 100;
  const defaultWeight = 250;
  const increasePercent = doughWeight / defaultWeight;
  const size = (defaultSize * increasePercent * 2) / 2;
  if (size > 130) {
    return 130;
  }
  return size;
}

const DoughFigure = ({
  doughWeight,
  shouldAnimate,
  animationVariant,
  firstRender,
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
      scale: [50, 0.95, 1.05, 0.97, 1.02, 1, 0.99, 1.01, 1, 1, 1, 1],
      transition: {
        duration: 2.5,
        delay: Math.random() * (0.4 - 0.2) + 0.2,
        times: [0, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 9.5, 1],
      },
    },
  };
  if (firstRender) {
    controls.start(variants.intro);
  } else if (shouldAnimate) {
    controls.start(variants[animationVariant]);
  }
  return <SDoughFigure animate={controls} $doughWeight={doughWeight} />;
};

export default DoughFigure;
