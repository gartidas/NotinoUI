import styled from "styled-components";
import { MD, SM } from "../../../utils/theme";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #115196;
  word-wrap: break-word;
  text-align: justify;
  text-align-last: center;

  @media screen and (max-width: ${MD}px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: ${SM}px) {
    font-size: 1.4rem;
  }
`;
