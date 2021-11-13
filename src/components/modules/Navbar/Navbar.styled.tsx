import styled from "styled-components";
import { MD, SM } from "../../../utils/theme";

export const NAVBAR_HEIGHT = 80;
export const NAVBAR_HEIGHT_MOBILE = 60;

export const StyledContainer = styled.div`
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  padding: 20px;
  background-color: #0c3867;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${SM}px) {
    height: ${NAVBAR_HEIGHT_MOBILE}px;
  }
`;

export const StyledTitle = styled.h1`
  margin-right: auto;
  font-size: 2.5rem;
  color: #1976da;

  @media screen and (max-width: ${MD}px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: ${SM}px) {
    font-size: 1.4rem;
  }
`;
