import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Calculator from "../components/Calculator";
import OverlayIntro from "../components/views/OverlayIntro";

const SContainer = styled.div`
  background-color: ${(props) => props.theme.offBlack};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SMain = styled.main`
  margin: auto;
`;

const SFooter = styled.footer`
  justify-self: flex-end;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.offWhite};
`;

const Home: NextPage = () => {
  return (
    <SContainer>
      <Head>
        <title>Pizza calculator</title>
        <meta name="description" content="Generate your pizza recipe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OverlayIntro>
        <SMain>
          <h1>Pizza calculator</h1>

          <Calculator />
        </SMain>

        <SFooter>Fannar</SFooter>
      </OverlayIntro>
    </SContainer>
  );
};

export default Home;
