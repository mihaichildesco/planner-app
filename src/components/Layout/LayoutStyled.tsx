import styled from "styled-components";
import { COLORS, FONTS } from "../../constants/variables";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: ${FONTS.poppins};
`;

export const SideMenuContainer = styled.div``;
export const MainContainer = styled.div`
  background-color: ${COLORS.grey};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const HeaderContainer = styled.div``;
export const ChildrenContainer = styled.div``;
