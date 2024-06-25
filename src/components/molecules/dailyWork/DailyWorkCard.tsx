import React from "react";
import { StyledDailyWorkCard } from "../../../styles/design-system/molecules/dailyWork/DailyWorkCard.styled";
import { book6 } from "../../../assets/images/books";
import { StyledDailyWorkBookImg } from "../../../styles/design-system/atoms/dailyWork/DailyWorkBookImg.styled";
import CircularProgressBar from "../../atoms/circularProgressBar/CircularProgressBar";

const DailyWorkCard = () => {
  return (
    <StyledDailyWorkCard>
      <h4>Books this week</h4>
      <StyledDailyWorkBookImg src={book6} alt="book6" />
      <CircularProgressBar progress={60} />
    </StyledDailyWorkCard>
  );
};

export default DailyWorkCard;
