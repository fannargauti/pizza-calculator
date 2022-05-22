import React, { useState } from "react";
import styled from "styled-components";
import DoughFigures from "./DoughFigures";
import Header from "./Header";

const SOverlayIntro = styled.div`
  background: radial-gradient(
    circle at 75% 50%,
    rgba(255, 245, 223, 1) 0%,
    rgba(255, 243, 195, 1) 56%,
    rgba(255, 242, 178, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SButton = styled.button`
  position: relative;
  z-index: 100;
  height: 100px;
  width: 300px;
  background-color: tomato;
  border: none;
  font-size: 58px;
  border-radius: 8px;
  color: white;
`;

const OverlayIntro = ({ children }: { children: React.ReactElement[] }) => {
  const [started, setStarted] = useState(false);
  return started ? (
    children
  ) : (
    <SOverlayIntro>
      <Header>Pizza calculator</Header>
      <h2>Generate a perfect recipe based on your preferences</h2>
      <SButton onClick={() => setStarted(true)}>start</SButton>
    </SOverlayIntro>
  );
};

export default OverlayIntro;
