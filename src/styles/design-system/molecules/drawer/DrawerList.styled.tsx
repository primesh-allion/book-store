import styled from "styled-components";

export const StyledDrawerList = styled.li<{ $active: boolean }>`
  width: 172px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 26px;
  padding: 0px 10px;
  height: 50px;
  cursor: pointer;
  margin: 15px 0;

  ${({ $active }) =>
    $active &&
    `
    background-color: var(--base-primary-color);
    border-radius: 30px;
    color: var(--base-white-color);
  `}

  a {
    color: var(--base-menu-text-color);
    font-size: var(--font-body);

    ${({ $active }) =>
      $active &&
      `
      color: var(--base-white-color);
    `}
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;

    ${({ $active }) =>
      $active &&
      `
      background-color: var(--base-white-color);
      border-radius: 50%;
     
    `}
  }
`;
