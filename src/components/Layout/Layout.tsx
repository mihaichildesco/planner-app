import * as styled from "./LayoutStyled";
import { IProps } from "./LayoutModel";
import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";

const Layout = (props: IProps) => {
  const { children } = props;

  // //const handleTitleText = (event: string) => {
  //   setText(event);
  // };

  return (
    <styled.LayoutContainer>
      <styled.SideMenuContainer>
        <SideMenu />
      </styled.SideMenuContainer>

      <styled.MainContainer>
        <styled.HeaderContainer>
          <Header />
        </styled.HeaderContainer>
        <styled.ChildrenContainer>{children}</styled.ChildrenContainer>
      </styled.MainContainer>
    </styled.LayoutContainer>
  );
};

export default Layout;
