import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;
export const theme = {
  colors: {
    white: "#f9f9f9",
    black: "#33333313",
    gray: "#85888C",
    coral1: "#b3002d",
    coral2: "#e60039",
    coral3: "#ff1a53",
    coral4: "#ff4d79",
    coral5: "#ff809f",
    coral6: "#ffb3c6",
  },
  button: {
    color: {
      black: "black",
      default: "#33333313",
      primary: "#EA4C89",
      secondary: "#FF4742",
      tertiary: "#405cf5",
    },
  },
};
