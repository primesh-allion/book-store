import React from "react";
import SummeryCard from "../../molecules/summeryCard/SummeryCard";
import { SUMMERY } from "../../../utilities/summery";
import { StyledSummeryCardListContainer } from "../../../styles/design-system/organisms/summeryCards/SummeryCardListContainer.styled";

const SummeryCardList = () => {
  return (
    <StyledSummeryCardListContainer>
      {SUMMERY.map(({ title, description, id, image }) => (
        <SummeryCard
          id={id}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </StyledSummeryCardListContainer>
  );
};

export default SummeryCardList;
