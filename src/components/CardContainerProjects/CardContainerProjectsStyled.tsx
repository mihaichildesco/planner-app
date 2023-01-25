import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const CardContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
  }
  background-color: #fff;
  max-width: 300px;
  min-height: 280px;
  margin-left: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding-left: 15px;
  margin-top: 35px;
`;

export const HeaderCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  margin-top: 18px;
  margin-right: 20px;
`;
export const TitleCard = styled.h3``;
export const TextDescription = styled.p`
  font-size: 15px;
`;
export const StartDate = styled.p`
  font-size: small;
  margin-top: 100px;
  color: ${COLORS.grey2};
`;
export const EndDate = styled.p`
  font-size: 14px;
  color: red;
`;

export const EditButtonContainer = styled.div`
  margin-top: 10px;
`;
