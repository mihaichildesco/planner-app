import * as styled from "./HeaderStyled";
import UserName from "../UserName/UserName";
import Avatar from "@mui/material/Avatar";
import { IProps } from "./HeaderModel";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = (props: IProps) => {
  const { image = "" } = props;

  const [titleText, setTitleText] = useState("DASHBOARD");
  let location = useLocation();

  useEffect(() => {
    if (window.location.pathname === "/") setTitleText("DASHBOARD");
    else if (window.location.pathname === "/projects") setTitleText("PROJECTS");
    else if (window.location.pathname === "/persons") setTitleText("PERSONS");
  }, [location]);

  return (
    <styled.HeaderContainer>
      <styled.TitleHeaderWrapper>
        <styled.TitleHeader>{titleText}</styled.TitleHeader>
      </styled.TitleHeaderWrapper>

      <styled.UsernameContainer>
        <UserName user="Andrei P."></UserName>
        <styled.IconUser>
          <Avatar alt="Remy Sharp" src={image}></Avatar>
        </styled.IconUser>
      </styled.UsernameContainer>
    </styled.HeaderContainer>
  );
};

export default Header;
