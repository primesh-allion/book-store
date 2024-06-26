import { StyledCarouselImg } from "../../../styles/design-system/atoms/carousel/CarouselImg.styled";
import { StyledCarousel } from "../../molecules/carousel/carousel.styled";
import { StyledCarouselList } from "../../molecules/carousel/carouselList.styled";

import { StyledCarouselContainer } from "../../molecules/carousel/carouselContainer.styled";

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  return (
    <>
      <StyledCarouselContainer>
        <StyledCarousel>
          {images.map((img, index) => (
            <StyledCarouselList key={index}>
              <StyledCarouselImg src={img} alt={`book`} />
            </StyledCarouselList>
          ))}
        </StyledCarousel>
      </StyledCarouselContainer>
    </>
  );
};

export default Carousel;
