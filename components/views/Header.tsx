import React from "react";
import styled from "styled-components";

const SHeader = styled.h2`
  font-size: 48px;
  text-transform: uppercase;
  font-style: italic;
  text-shadow: 4px -3px 0px rgba(255, 0, 0, 1);
  color: #ffa2d0;
  font-weight: bold;
  text-align: center;
`;

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <SHeader>{children}</SHeader>;
};

export default Header;
