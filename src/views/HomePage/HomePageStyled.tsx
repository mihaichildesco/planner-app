import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageText = styled.p`
  font-size: 30px;
`;

export const ButtonComponent = styled.button`
  background-color: red;
  padding: 10px;
`;

export const SmallCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`;

export const BigCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`;
