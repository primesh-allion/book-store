import styled from "styled-components";

export const StyledLanguageContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    height: 40px;

    h2 {
      color: var(--base-black-color);
    }
  }
`;
