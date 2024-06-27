import { StyledBookSectionContainer } from "../../../styles/design-system/organisms/bookSection/BookSectionContainer.styled";
import { StyledBookSectionHeader } from "../../../styles/design-system/organisms/bookSection/BookSectionHeader.styled";
import LanguageSelector from "../../atoms/language/LanguageSelector";
import SearchBar from "../../atoms/searchBar/SearchBar";
import BookCard from "../../molecules/book/BookCard";
import BooksList from "./booksList/BooksList";

const BooksSection = () => {
  return (
    <StyledBookSectionContainer>
      <StyledBookSectionHeader>
        <SearchBar />
        <LanguageSelector />
      </StyledBookSectionHeader>
      <BookCard />
      <BooksList />
    </StyledBookSectionContainer>
  );
};

export default BooksSection;
