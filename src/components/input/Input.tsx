import styled from "styled-components";

const StyeldInput = styled.input`
  color: tomato;
`;

interface InputProps {
  type?: string;
}

const Input = ({ type }: InputProps) => {
  return <StyeldInput />;
};

export { Input };
