import * as styled from "./HomePageStyled";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import OutLinedCard from "../../components/OutLinedCard/OutLinedCard";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/persons");
  };

  return (
    <styled.HomePageContainer>
      <styled.SmallCardsContainer>
        <Card />
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </styled.SmallCardsContainer>
      <styled.BigCardsContainer>
        <OutLinedCard></OutLinedCard>
        <OutLinedCard></OutLinedCard>
        <OutLinedCard></OutLinedCard>
      </styled.BigCardsContainer>
    </styled.HomePageContainer>
  );
};

export default HomePage;
