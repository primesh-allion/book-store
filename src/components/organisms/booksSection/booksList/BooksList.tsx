import { StyledViewAllButton } from "../../../../styles/design-system/atoms/buttons/ViewAllButton.styled";
import { StyledSectionHeader } from "../../../../styles/design-system/molecules/sectionHeader/SectionHeader.styled";
import { StyledBookListContainer } from "../../../../styles/design-system/organisms/bookSection/BookListContainer.styled";
import { StyledListContainer } from "../../../../styles/design-system/organisms/listContainer/ListContainer.styled";
import { BOOK_LIST } from "../../../../utilities/book-list";
import Book from "../../../molecules/book/Book";

const BooksList = () => {
  return (
    <StyledBookListContainer>
      <StyledSectionHeader>
        <h2>Popular</h2>
        <StyledViewAllButton role="button">View all</StyledViewAllButton>
      </StyledSectionHeader>

      <StyledListContainer role="list">
        {BOOK_LIST.map(({ title, description, image, id }) => (
          <Book
            index={id}
            bookImg={image}
            bookTitle={title}
            bookDescription={description}
          />
        ))}
      </StyledListContainer>
    </StyledBookListContainer>
  );
};

export default BooksList;
