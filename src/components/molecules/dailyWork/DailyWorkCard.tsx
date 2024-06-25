import React from "react";
import { StyledDailyWorkCard } from "../../../styles/design-system/molecules/dailyWork/DailyWorkCard.styled";
import { book6 } from "../../../assets/images/books";
import { StyledDailyWorkBookImg } from "../../../styles/design-system/atoms/dailyWork/DailyWorkBookImg.styled";
import CircularProgressBar from "../../atoms/circularProgressBar/CircularProgressBar";
import { StyledDailyWorkContent } from "../../../styles/design-system/molecules/dailyWork/DailyWorkContent.styled";

const DailyWorkCard = () => {
  return (
    <StyledDailyWorkCard>
      <StyledDailyWorkContent>
        <h4>Books this week</h4>
        <StyledDailyWorkBookImg src={book6} alt="book6" />
      </StyledDailyWorkContent>
      <CircularProgressBar progress={60} />
    </StyledDailyWorkCard>
  );
};

export default DailyWorkCard;
