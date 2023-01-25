import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const HeaderContainer = styled.div`
  padding: 40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.grey};
`;

export const TitleHeaderWrapper = styled.div``;

export const TitleHeader = styled.h2`
  padding: 0;
  line-height: 0;
`;
export const UsernameContainer = styled.div`
  display: flex;
`;

export const UserName = styled.span`
  margin-right: 20px;
  font-weight: bold;
`;

export const IconUser = styled.div``;
