import React from "react";
import { StyledAuthorContainer } from "../../../styles/design-system/molecules/author/AuthorContainer.styled";
import { StyledAuthorImg } from "../../../styles/design-system/atoms/author/AuthorImg.styled";
import { StyledAuthorImgContainer } from "../../../styles/design-system/molecules/author/AuthorImgContainer.styled";

type AuthorProps = {
  name: string;
  image: string;
  index: number;
};
const Author = ({ index, name, image }: AuthorProps) => {
  return (
    <StyledAuthorContainer key={index}>
      <StyledAuthorImgContainer>
        <StyledAuthorImg src={image} alt={name} />
      </StyledAuthorImgContainer>
      <h6>{name}</h6>
    </StyledAuthorContainer>
  );
};

export default Author;
