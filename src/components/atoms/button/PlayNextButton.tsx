import React, { PropsWithChildren } from "react";
import { StyledPlayButton } from "../../../styles/design-system/atoms/book/StyledPlayButton.styled";

interface PlayButtonProps extends PropsWithChildren {}

const PlayButton = ({ children }: PlayButtonProps) => {
  return <StyledPlayButton>{children}</StyledPlayButton>;
};

export default PlayButton;
