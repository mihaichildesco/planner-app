import styled from "styled-components";
import { COLORS } from "../../constants/variables";

export const bigCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px 270px 303px 35px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  margin-bottom: 50px;
`;

export const CardTitle = styled.h2`
  margin-bottom: 30px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  background-color: ${COLORS.primary};
`;

export const ProjectName = styled.span`
  font-size: 20px;
`;

export const DescriptionProject = styled.span`
  color: grey;
`;

export const IconTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const DeadlineDate = styled.p`
  color: ${COLORS.primary};
  margin-top: 40px;
  width: 100px;
`;

export const IconContainer = styled.div`
  padding-top: 10px;
`;
