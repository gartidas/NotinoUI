import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { StyledContainer, StyledTitle } from "./Navbar.styled";

export interface INavbarProps {
  isButtonShown?: true;
}

const Navbar = ({ isButtonShown }: INavbarProps) => {
  const history = useHistory();

  return (
    <StyledContainer>
      <StyledTitle>Todos</StyledTitle>
      {isButtonShown && <Button onClick={() => history.goBack()}>Back</Button>}
    </StyledContainer>
  );
};

export default Navbar;
