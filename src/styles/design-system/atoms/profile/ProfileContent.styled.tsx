import styled from "styled-components";

export const StyledProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  h5 {
    display: none;
  }

  @media (min-width: 768px) {
    h5 {
      display: block;
    }
  }
`;
