import ButtonSideMenu from "../ButtonSideMenu/ButtonSideMenu";
import * as styled from "./SideMenuStyled";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { IProps } from "./SideMenuModel";
import { useNavigate } from "react-router-dom";

const SideMenu = (props: IProps) => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    /**==============================================
     * FLEX-CONTAINER
     *=============================================**/
    <styled.SideMenuContainer>
      <styled.SideMenuTitle>Planner</styled.SideMenuTitle>
      <styled.SideMenuSubtitle>Menu</styled.SideMenuSubtitle>

      {/* flex child div */}
      <styled.ButtonsContainer>
        <styled.ButtonWrapper>
          <DashboardIcon />
          <ButtonSideMenu
            text="Dashboard"
            handleButtonClick={() => handleNavigate("/")}
          ></ButtonSideMenu>
        </styled.ButtonWrapper>
        <styled.ButtonWrapper>
          <AccountTreeIcon />
          <ButtonSideMenu
            text="Projects"
            handleButtonClick={() => handleNavigate("/projects")}
          ></ButtonSideMenu>
        </styled.ButtonWrapper>
        <styled.ButtonWrapper>
          <PeopleIcon />
          <ButtonSideMenu
            text="Persons"
            handleButtonClick={() => handleNavigate("/persons")}
          ></ButtonSideMenu>
        </styled.ButtonWrapper>
      </styled.ButtonsContainer>

      {/* flex child div */}
      <styled.LogoutWrapper>
        <styled.ButtonWrapper>
          <LogoutIcon />
          <ButtonSideMenu
            text="Logout"
            handleButtonClick={() => handleNavigate("/login")}
          ></ButtonSideMenu>
        </styled.ButtonWrapper>
      </styled.LogoutWrapper>
    </styled.SideMenuContainer>
  );
};

export default SideMenu;
