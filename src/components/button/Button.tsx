import styled from "styled-components";

interface ButtonProps {
  label?: string;
  color: string;
  bgColor: string;
  outline?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ bgColor, color, outline }) =>
    outline ? color : bgColor};
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: ${({ bgColor, color, outline }) => (outline ? bgColor : color)};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  border: 1px solid
    ${({ color, bgColor, outline }) => (outline ? bgColor : color)};
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover,
  &:focus {
    border: 1px solid
      ${({ color, bgColor, outline }) => (outline ? color : bgColor)};
    background-color: ${({ bgColor, color, outline }) =>
      outline ? bgColor : color};
    color: ${({ bgColor, color, outline }) => (outline ? color : bgColor)};
  }
`;

const Button = ({ label, bgColor, color, outline }: ButtonProps) => {
  return (
    <StyledButton outline={outline} color={color} bgColor={bgColor}>
      {label}
    </StyledButton>
  );
};

export { Button };

Button.defaultProps = {
  color: "#ffffff",
  bgColor: "#33333313",
  outline: false,
};
