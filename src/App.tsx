import { useEffect, useState } from "react";
import AudioBookCard from "./components/molecules/audioBook/AudioBookCard";
import Drawer from "./components/molecules/drawer/Drawer";
import AuthorsList from "./components/organisms/authorsList/AuthorsList";
import BooksList from "./components/organisms/booksList/BooksList";
import DailyWork from "./components/organisms/dailyWork/DailyWork";
import Header from "./components/organisms/header/Header";
import NextBooksList from "./components/organisms/nextBooksList/NextBooksList";
import SummeryCardList from "./components/organisms/summeryCardList/SummeryCardList";
import { StyledContainer } from "./styles/design-system/atoms/container/Container.styled";

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
      <StyledContainer>
        <BooksList />
        <AuthorsList />
        <SummeryCardList />
        <NextBooksList />
        <DailyWork />
        <AudioBookCard />
        <Drawer open={open || screenWidth > 768} />
      </StyledContainer>
    </>
  );
}

export default App;
