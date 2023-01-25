import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const SideMenuContainer = styled.div`
  background-color: ${COLORS.theme1};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SideMenuTitle = styled.div`
  font-size: 1.9vw;
  letter-spacing: 0px;
  font-weight: 600;
  padding: 15px 35px;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 15px;
  text-transform: uppercase;
`;
export const SideMenuSubtitle = styled.div`
  font-size: 0.9vw;
  color: ${COLORS.primary};
  font-weight: 600;
  margin-left: 35px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  padding: 10px;
  margin-left: 25px;
  :hover {
    background-color: #f8c9ca;
    width: 75%;
    margin-left: 10px;
    border-radius: 12px;
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
  }
  :focus {
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
  }
`;

export const LogoutWrapper = styled.div``;
export const ButtonsContainer = styled.div`
  flex-grow: 2;
`;
