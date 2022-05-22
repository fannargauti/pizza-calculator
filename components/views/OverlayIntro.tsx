import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import DoughFigures from "./DoughFigures";
import Header from "./Header";

interface IOverlayIntro {
  setStarted: () => void;
}

const SOverlayIntro = styled(motion.div)`
  background: #fff5db;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const SOverlayContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin: 0;
  }
`;

const SOverlayDescription = styled(motion.p)``;

const OverlayIntro = ({ setStarted }: IOverlayIntro) => {
  return (
    <SOverlayIntro>
      <SOverlayContent
        key="overlayContent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>Pizza calculator</Header>
        <SOverlayDescription>
          Generate a perfect recipe based on your preferences
        </SOverlayDescription>
        <Button onClick={setStarted}>start</Button>
      </SOverlayContent>
    </SOverlayIntro>
  );
};

export default OverlayIntro;
