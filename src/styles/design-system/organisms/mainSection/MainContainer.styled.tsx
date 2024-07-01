import styled from "styled-components";

export const StyledMainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;
