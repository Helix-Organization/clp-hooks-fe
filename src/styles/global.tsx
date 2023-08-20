import { createGlobalStyle, css } from "styled-components";
import { reset } from "./reset";

export const variables = css`
  :root {
    --primary-color: #0066ff;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  
  body {
    font-size: 16px;
  }
  

  * {
    box-sizing: border-box;
  }

  ${variables}
`;
