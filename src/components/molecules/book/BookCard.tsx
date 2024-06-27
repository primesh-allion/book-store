import React from "react";
import { StyledBookCardContainer } from "../../../styles/design-system/molecules/book/BookCardContainer.styled";
import Button from "../../atoms/button/Button";
import { bookCardImg } from "../../../assets/images/books/index";
import { StyledBookContent } from "../../../styles/design-system/molecules/book/BookCardContent.styled";

const BookCard = () => {
  return (
    <StyledBookCardContainer background={bookCardImg}>
      <StyledBookContent>
        <h1>TRENDING BOOKS THIS MONTH</h1>
        <p>Listen to trending books in this months</p>
        <Button />
      </StyledBookContent>
    </StyledBookCardContainer>
  );
};

export default BookCard;
