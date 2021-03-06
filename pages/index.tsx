import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Calculator from "../components/Calculator";
import OverlayIntro from "../components/views/OverlayIntro";

const SContainer = styled.div`
  background: url("/pizza.png") repeat;
  background-size: 60px;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const SMain = styled.main`
  margin: auto;
  height: 100%;
  width: 100%;
`;

const Home: NextPage = () => {
  const [started, setStarted] = useState(false);

  return (
    <SContainer>
      <Head>
        <title>Pizza calculator</title>
        <meta name="description" content="Generate your pizza recipe" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {started ? (
          <SMain key="main">
            <Calculator />
          </SMain>
        ) : (
          <OverlayIntro key="overlay" setStarted={() => setStarted(true)} />
        )}
      </AnimatePresence>
    </SContainer>
  );
};

export default Home;
