import styled from "styled-components";

export const StyledDrawerImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    height: 224px;
    width: 150px;
    object-fit: cover;
  }
`;
