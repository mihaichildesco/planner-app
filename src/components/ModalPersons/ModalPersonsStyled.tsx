import styled from "styled-components";
import { FONTS } from "../../constants/variables";

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  font-family: ${FONTS.poppins};
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px 50px 50px 50px;
`;
export const AssignedPersonsContainer = styled.div`
  margin-right: 20px;
`;
export const WraperIconName = styled.div`
  display: flex;
  align-items: center;
`;
export const AvailablePersonsContainer = styled.div``;
export const LineHight = styled.div`
  background-color: #c0c0c0;
  width: 2px;
  height: 500px;
  margin-right: 20px;
`;
