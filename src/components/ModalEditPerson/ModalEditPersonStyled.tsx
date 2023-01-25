import styled from "styled-components";
import { FONTS } from "../../constants/variables";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONTS.poppins};
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px 100px 50px 100px;
`;

export const TitleHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 100px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
