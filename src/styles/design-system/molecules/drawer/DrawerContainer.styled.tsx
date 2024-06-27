import styled from "styled-components";

export const StyledDrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  width: 212px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--base-white-color);
  transform: ${({ open }) => (open ? "" : "translateX(-212px)")};
  transition: all 0.3s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
