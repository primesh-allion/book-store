import React from "react";
import { StyledHeader } from "../../../styles/design-system/organisms/header/Header.styled";
import { HamburgIcon } from "../../atoms/hamburgIcon/HamburgIcon";

const Header = () => {
  const onClickHamburgMenuItem = () => {
    // setIsActive(!isActive);
  };

  return (
    <StyledHeader>
      <HamburgIcon onClickHamburgMenuItem={onClickHamburgMenuItem} />
    </StyledHeader>
  );
};

export default Header;
