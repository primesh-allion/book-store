import React from "react";
import DailyWorkCard from "../../molecules/dailyWork/DailyWorkCard";
import { StyledDailyWorkContainer } from "../../../styles/design-system/organisms/dailyWorkSection/DailyWorkContainer.styled";

const DailyWork = () => {
  return (
    <>
      <StyledDailyWorkContainer>
        <h2>Daily Work</h2>
        <DailyWorkCard />
      </StyledDailyWorkContainer>
    </>
  );
};

export default DailyWork;
