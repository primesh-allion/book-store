import { useCallback, useEffect, useState } from "react";
import { StyledAudioBookCard } from "../../../styles/design-system/molecules/audioBook/AudioBookCard.styled";
import AudioBookMask from "../../atoms/audioBook/AudioBookMask";
import AudioBookPulse from "../../atoms/audioBook/AudioBookPulse";
// Import Swiper React components

import {
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
} from "../../../assets/images/books";
import Carousel from "../../atoms/carousel/Carousel";
const AudioBookCard = () => {
  const data = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = useCallback(() => {
    if (currentIndex === data.length - 1) return setCurrentIndex(0);
    return setCurrentIndex(currentIndex + 1);
  }, [currentIndex, data.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 1000);
    return () => clearInterval(interval);
  }, [carouselInfiniteScroll]);
  const images = [book1, book2, book3, book4, book5];
  return (
    <StyledAudioBookCard>
      {/* <AudioBookMask />
      <AudioBookPulse />
      <Carousel images={images} /> */}
      <div>
        <h6>Wonder</h6>
        <p>R.J Palacio</p>
      </div>
    </StyledAudioBookCard>
  );
};

export default AudioBookCard;
