import styled, { keyframes } from "styled-components";

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;
export const StyledViewAllButton = styled.button`
  color: var(--base-secondary-color-1);
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:active {
    animation: ${clickAnimation} 0.3s;
  }
`;
