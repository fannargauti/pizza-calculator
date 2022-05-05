import styled, { keyframes } from "styled-components";
import CounterInput from "./CounterInput";

interface DoughsProps {
  numberOfDoughs: number;
  setNumberOfDoughs: Function;
}

const wobble = keyframes`
  0% { transform: scale(2, 2); } 
  70% { transform: scale(0.95, 0.95); border-radius: 45% } 
  100% { transform: scale(1, 1); border-radius: 40% } 
`;

const SDoughContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SDoughFigure = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 40%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 245, 223, 1) 0%,
    rgba(255, 243, 195, 1) 56%,
    rgba(255, 242, 178, 1) 100%
  );
  border-color: tomato;
  border-width: 5px;

  animation: ${wobble} 0.3s ease-out;
`;

const maybeUpdateNumberOfDoughs = (
  nextNumberOfDoughs: number,
  setNumberOfDoughs: Function
) => {
  if (nextNumberOfDoughs > -1) {
    setNumberOfDoughs(nextNumberOfDoughs);
  }
};

const Doughs = ({ numberOfDoughs, setNumberOfDoughs }: DoughsProps) => {
  const error = numberOfDoughs === 0 && "Making zero pizzas is no fun";

  return (
    <div>
      <h2>How many pizzas do you want to make?</h2>
      <SDoughContainer>
        {Array.from(Array(numberOfDoughs).keys()).map((num) => {
          return <SDoughFigure key={num} />;
        })}
      </SDoughContainer>
      <CounterInput
        title="Number of doughs"
        value={numberOfDoughs}
        modifier={1}
        update={(nextNumberOfDoughs: number) =>
          maybeUpdateNumberOfDoughs(nextNumberOfDoughs, setNumberOfDoughs)
        }
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Doughs;
