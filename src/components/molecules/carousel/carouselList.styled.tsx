import { number } from "prop-types";
import styled from "styled-components";

export const StyledCarouselList = styled.li<{ currentIndex: number }>`
  list-style: none;
  padding: 0 10px;

  // &:nth-child(n) img {
  //   transform: scale(1.5);
  // }
`;
