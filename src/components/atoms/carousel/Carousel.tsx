import { useState } from "react";
import { StyledCarouselImg } from "../../../styles/design-system/atoms/carousel/CarouselImg.styled";
import { StyledCarousel } from "../../molecules/carousel/carousel.styled";
import { StyledCarouselList } from "../../molecules/carousel/carouselList.styled";

import { StyledCarouselContainer } from "../../molecules/carousel/carouselContainer.styled";

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 2000); // Adjust the timing as needed
  //   return () => clearInterval(interval);
  // }, [images.length]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <StyledCarouselContainer>
        <StyledCarousel currentIndex={currentIndex}>
          {images.map((img, index) => (
            <StyledCarouselList key={index} currentIndex={currentIndex}>
              <StyledCarouselImg src={img} alt={`book`} />
            </StyledCarouselList>
          ))}
        </StyledCarousel>
      </StyledCarouselContainer>
    </>
  );
};

export default Carousel;
