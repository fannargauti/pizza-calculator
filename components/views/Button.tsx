import { filterProps, motion } from "framer-motion";
import styled, { useTheme } from "styled-components";

interface IButton {
  children: React.ReactNode;
  onClick: Function;
}

interface IStyledButton {
  onClick: Function;
}

const SButton = styled.button<IStyledButton>`
  padding: 16px 48px;
  font-size: 24px;
  font-family: inherit;
  border-radius: 8px;
  background-color: ${(props) => props.theme.blue};
  color: white;
  margin-top: auto;
  border: none;
  transition: background-color, transform 0.2s ease-in-out;
  &:hover {
    background-color: #717fff;
  }
  &:active {
    background-color: #959ef5;
    transform: scale(0.98);
  }
`;

const Button = ({ children, onClick }: IButton) => {
  return <SButton onClick={() => onClick()}>{children}</SButton>;
};

export default Button;
