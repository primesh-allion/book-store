import React from "react";
import languageImg from "../../../assets/images/language/languageImg.png";
import { StyledFlagImg } from "../../../styles/design-system/atoms/flag/FlagImg.styled";
import { StyledFlagContainer } from "../../../styles/design-system/atoms/flag/FlagImgContainer";
import { StyledLanguageContainer } from "../../../styles/design-system/molecules/language/LanguageContainer.styled";
const LanguageSelector = () => {
  return (
    <StyledLanguageContainer>
      <h2>EN</h2>
      <StyledFlagContainer>
        <StyledFlagImg src={languageImg} alt="language selector" />
      </StyledFlagContainer>
    </StyledLanguageContainer>
  );
};

export default LanguageSelector;
