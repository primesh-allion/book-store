import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: var(--base-search-bar-background-color);
  padding: 5px;

  @media (min-width: 768px) {
    width: 492px;
  }

  input {
    border: none;
    border: none;
    background: transparent;
    outline: 0;
    padding-left: 20px;
    font-size: var(--font-h5-desktop);
    width: 100%;

    ::placeholder {
      color: var(--base-secondary-color-1);
    }
  }
`;
