import styled from "styled-components";

export const StyledDailyWorkCard = styled.div`
  width: 296px;
  height: 118px;
  border-radius: 16px;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 10px;
  gap: 10px;
  background-color: var(--base-white-color);

  h4 {
    color: var(--base-secondary-color-4);
  }
`;
