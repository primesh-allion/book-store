import styled, { keyframes } from "styled-components";
const move = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
export const StyledCarousel = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 140px;
  transform: translateX(-50%);
`;
