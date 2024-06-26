import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 60px auto 0;
  padding: 0 38px;

  hr {
    border: 1px solid var(--divider-color);
  }

  @media (min-width: 768px) {
    margin-top: 35px;
    margin-right: 0;
    width: 850px;
  }
`;
