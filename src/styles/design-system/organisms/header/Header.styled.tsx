import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: var(--base-secondary-color-2);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;
