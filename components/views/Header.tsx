import React from "react";
import styled from "styled-components";

const SHeader = styled.h2`
  font-size: 72px;
  text-transform: uppercase;
  text-shadow: 4px -3px 0px #ffa2d0;
  color: ${(props) => props.theme.blue};
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
