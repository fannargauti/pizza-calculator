import styled from "styled-components";

interface ILabel {
  children: React.ReactNode;
  htmlFor: string;
}

const SLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 24px;
  margin: 3px 0;
`;

const Label = ({ children, htmlFor }: ILabel) => {
  return <SLabel htmlFor={htmlFor}>{children}</SLabel>;
};

export default Label;
