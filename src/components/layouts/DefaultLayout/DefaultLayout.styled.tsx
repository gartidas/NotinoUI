import styled from "styled-components";
import { SM } from "../../../utils/theme";
import {
  NAVBAR_HEIGHT,
  NAVBAR_HEIGHT_MOBILE,
} from "../../modules/Navbar/Navbar.styled";

export const FullWidthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
  padding: 0 50px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfe3fa;

  @media screen and (max-width: ${SM}px) {
    min-height: calc(100vh - ${NAVBAR_HEIGHT_MOBILE}px);
    padding: 0 20px 0 20px;
  }
`;
