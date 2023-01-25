import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-top: 20px;
  padding-left: 70px;
  padding-right: 70px;
  margin-bottom: 65px;
  margin-top: 20px;
  border-bottom: 5px solid ${COLORS.primary};
`;

export const TextCard = styled.p`
  margin-top: 0px;
`;
