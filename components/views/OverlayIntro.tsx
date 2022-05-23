import { motion } from "framer-motion";
import styled from "styled-components";
import Button from "./Button";

interface IOverlayIntro {
  setStarted: () => void;
}

const SOverlayIntro = styled(motion.div)`
  background: #fff5db;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 18px;
`;

const SOverlayContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin: 18px 0;
  }
`;

const SLogo = styled.img`
  margin: 32px 0;
`;

const SOverlayDescription = styled(motion.p)`
  margin: 18px 0;
  text-align: center;
  font-size: 22px;
`;

const OverlayIntro = ({ setStarted }: IOverlayIntro) => {
  return (
    <SOverlayIntro>
      <SOverlayContent
        key="overlayContent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SLogo src="/logo.svg" alt="pizza calculator logo" />
        <SOverlayDescription>
          Generate a perfect pizza recipe everytime, based on your preferences
          and context.
        </SOverlayDescription>
        <Button onClick={setStarted}>start</Button>
      </SOverlayContent>
    </SOverlayIntro>
  );
};

export default OverlayIntro;
