import { useCallback, useEffect, useState } from "react";
import { StyledAudioBookCard } from "../../../styles/design-system/molecules/audioBook/AudioBookCard.styled";
// Import Swiper React components

import {
  book1,
  book2,
  book3,
  book4,
  book5,
} from "../../../assets/images/books";
import { wave, audioBooksImg } from "../../../assets/images/audiobook/index";
import { StyledAudioBooksImg } from "../../../styles/design-system/atoms/audioBook/AudioBooksImg.styled";
import PlayButton from "../../atoms/button/PlayNextButton";
import PlayBackIcon from "../../atoms/icons/lib/PlayBackIcon";
import PlayNextIcon from "../../atoms/icons/lib/PlayNextIcon";

const AudioBookCard = () => {
  return (
    <StyledAudioBookCard background={wave}>
      <StyledAudioBooksImg src={audioBooksImg} alt="audioBooksImg" />
      {/* <AudioBookMask />
      <AudioBookPulse />
      <Carousel images={images} /> */}
      <div>
        <h6>Wonder</h6>
        <p>R.J Palacio</p>
      </div>
      {/* <PlayButton children={<PlayNextIcon />} />
      <PlayButton children={<PlayBackIcon />} /> */}
    </StyledAudioBookCard>
  );
};

export default AudioBookCard;
