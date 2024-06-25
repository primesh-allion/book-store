import React from "react";
import NextBookCard from "../../molecules/nextBookCard/NextBookCard";
import { NEXT_BOOKS_LIST } from "../../../utilities/next-books-list";

const NextBooksList = () => {
  return (
    <>
      <h2>Next Books</h2>
      {NEXT_BOOKS_LIST.map(({ title, author, time, image, id }) => (
        <NextBookCard
          id={id}
          title={title}
          author={author}
          time={time}
          image={image}
        />
      ))}
    </>
  );
};

export default NextBooksList;
