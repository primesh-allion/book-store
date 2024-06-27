import React from "react";
import NextBookCard from "../../molecules/nextBookCard/NextBookCard";
import { NEXT_BOOKS_LIST } from "../../../utilities/next-books-list";
import { StyledNextBooksListContainer } from "../../../styles/design-system/organisms/nextBookSection/NextBooksListContainer.styled";
import { StyledNextBooksWrapper } from "../../../styles/design-system/organisms/nextBookSection/NextBooksWrapper.styled";

const NextBooksList = () => {
  return (
    <>
      <StyledNextBooksListContainer>
        <h2>Next Books</h2>
        <StyledNextBooksWrapper>
          {NEXT_BOOKS_LIST.map(({ title, author, time, image, id }) => (
            <NextBookCard
              id={id}
              title={title}
              author={author}
              time={time}
              image={image}
            />
          ))}
        </StyledNextBooksWrapper>
      </StyledNextBooksListContainer>
    </>
  );
};

export default NextBooksList;
