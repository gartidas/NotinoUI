import { createGlobalStyle } from "styled-components";
import { MD } from "./theme";

const GlobalStyles = createGlobalStyle`
 // Scrollbar
 * {
    @media screen and (min-width: ${MD}px) {
      ::-webkit-scrollbar {
        width: 20px;
      }
      ::-webkit-scrollbar-track {
        background: #cfe3fa;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #0c3867;
      }
    }
  }
`;

export default GlobalStyles;
