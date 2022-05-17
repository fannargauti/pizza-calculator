import styled from "styled-components";

interface ILabel {
  children: React.ReactNode;
  htmlFor: string;
}

const SLabel = styled.label`
  font-weight: bold;
`;

const Label = ({ children, htmlFor }: ILabel) => {
  return <SLabel htmlFor={htmlFor}>{children}</SLabel>;
};

export default Label;
