import { FC } from "react";
import Navbar, { INavbarProps } from "../../modules/Navbar/Navbar";
import { ContentContainer, FullWidthContainer } from "./DefaultLayout.styled";

interface IDefaultLayoutProps extends INavbarProps {}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children, ...rest }) => {
  return (
    <FullWidthContainer>
      <Navbar {...rest} />
      <ContentContainer>{children}</ContentContainer>
    </FullWidthContainer>
  );
};

export default DefaultLayout;
