import AuthorsList from "./components/organisms/authorsList/AuthorsList";
import BooksList from "./components/organisms/booksList/BooksList";
import Header from "./components/organisms/header/Header";
import SummeryCardList from "./components/organisms/summeryCardList/SummeryCardList";
import { StyledContainer } from "./styles/design-system/atoms/container/Container.styled";

function App() {
  return (
    <>
      <Header />
      <StyledContainer>
        <BooksList />
        <AuthorsList />
        <SummeryCardList />
      </StyledContainer>
    </>
  );
}

export default App;
