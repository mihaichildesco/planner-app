import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const Container = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

export const NameAndJobWrapper = styled.div`
  margin-left: 10px;
  p {
    line-height: 0px;
    text-transform: uppercase;
    color: ${COLORS.buttonTheme};
    margin-top: 6px;
    font-size: 15px;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
