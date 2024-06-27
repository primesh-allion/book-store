import styled from "styled-components";

export const StyledBookCardContainer = styled.div<{ background: string }>`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--base-secondary-color-1);
    border-radius: 24px;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-top: 30px;

    h1 {
      font-family: "Playfair Display";
      color: var(--base-white-color);
    }

    p {
      color: var(--book-card-font-color);
    }
  }
`;
