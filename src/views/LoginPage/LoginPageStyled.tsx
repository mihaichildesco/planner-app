import styled from "styled-components";
import b4 from "../../assets/images/b4.jpg";
import { FONTS } from "../../constants/variables";
import m from "../../assets/images/m.jpg";

export const LoginPageContainer = styled.div`
  padding-top: 1vw;
  font-family: ${FONTS.poppins};
  background: url(${b4}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 3vw;
  color: #fff;
  text-align: center;
  padding: 2.5vw 1vw 1vw;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ContainerForm = styled.div`
  display: flex;
  background-color: #fff;
  margin: 5vw auto;
  max-width: 1067px;
`;

export const ImageForm = styled.div`
  background: url(${m}) no-repeat center;
  background-size: cover;
  min-height: 371px;
  width: 25%;
`;

export const VerticalTabContainer = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
`;

export const ArticleContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: #1565c0;
  h2 {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
