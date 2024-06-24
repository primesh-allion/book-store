import React from "react";
import { StyledBookContainer } from "../../../styles/design-system/molecules/book/BookContainer.styled";
import { StyledBookDescription } from "../../../styles/design-system/atoms/book/BookDescription.styled";
import { StyledBookImg } from "../../../styles/design-system/atoms/book/BookImg.styled";
import { StyledBookTitle } from "../../../styles/design-system/molecules/book/BookTitle.styled";

type BookProps = {
  bookImg: string;
  bookTitle: string;
  bookDescription: string;
  index: number;
};

const Book = ({ index, bookImg, bookTitle, bookDescription }: BookProps) => {
  return (
    <StyledBookContainer key={index}>
      <StyledBookImg src={bookImg} alt={bookTitle} />
      <StyledBookTitle>
        <h6>{bookTitle}</h6>
        <StyledBookDescription>{bookDescription}</StyledBookDescription>
      </StyledBookTitle>
    </StyledBookContainer>
  );
};

export default Book;
