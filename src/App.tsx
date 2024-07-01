import { useEffect, useState } from "react";
import LanguageSelector from "./components/atoms/language/LanguageSelector";
import Profile from "./components/atoms/profile/Profile";
import SearchBar from "./components/atoms/searchBar/SearchBar";
import AudioBookCard from "./components/molecules/audioBook/AudioBookCard";
import Drawer from "./components/molecules/drawer/Drawer";
import AuthorsList from "./components/organisms/authorsList/AuthorsList";
import DailyWork from "./components/organisms/dailyWork/DailyWork";
import Header from "./components/organisms/header/Header";
import NextBooksList from "./components/organisms/nextBooksList/NextBooksList";
import SummeryCardList from "./components/organisms/summeryCardList/SummeryCardList";
import { StyledContainer } from "./styles/design-system/atoms/container/Container.styled";
import BooksSection from "./components/organisms/booksSection/BooksSection";
import { StyledDetailedContainer } from "./styles/design-system/organisms/detailedSection/DetailedContainer.styled";
import { StyledMainContainer } from "./styles/design-system/organisms/mainSection/MainContainer.styled";

function App() {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setScreenWidth(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header setOpen={setOpen} open={open} />

      <StyledMainContainer>
        <StyledContainer>
          <BooksSection />
          <hr />
          <AuthorsList />
          <SummeryCardList />
        </StyledContainer>
        <StyledDetailedContainer>
          <Profile />
          <AudioBookCard />
          <NextBooksList />
          <DailyWork />
        </StyledDetailedContainer>
        <Drawer open={open || screenWidth > 768} />
      </StyledMainContainer>
    </>
  );
}

export default App;
