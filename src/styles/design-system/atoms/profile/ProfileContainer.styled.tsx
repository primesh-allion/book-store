import styled from "styled-components";

export const StyledProfileContainer = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: var(--base-white-color);
  border-radius: 30px;
  padding-left: 6px;
  padding-right: 20px;

  @media (min-width: 768px) {
    width: 243px;
    margin-top: 35px;
    margin-bottom: 30px;
  }
`;
