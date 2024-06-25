import AuthorsList from "./components/organisms/authorsList/AuthorsList";
import BooksList from "./components/organisms/booksList/BooksList";
import DailyWork from "./components/organisms/dailyWork/DailyWork";
import Header from "./components/organisms/header/Header";
import NextBooksList from "./components/organisms/nextBooksList/NextBooksList";
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
        <NextBooksList />
        <DailyWork />
      </StyledContainer>
    </>
  );
}

export default App;
