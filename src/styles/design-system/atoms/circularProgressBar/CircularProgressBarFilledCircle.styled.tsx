import styled from "styled-components";
import { StyledCircularProgressBarCircle } from "./CircularProgressBarCircle.styled";

export const StyledCircularProgressBarFilledCircle = styled(
  StyledCircularProgressBarCircle
)`
  stroke: var(--base-secondary-color-4);
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s ease-out;
`;
