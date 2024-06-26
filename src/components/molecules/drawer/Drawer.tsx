import React, { useState } from "react";
import Logo from "../../atoms/logo/Logo";
import { StyledDrawerContainer } from "../../../styles/design-system/molecules/drawer/DrawerContainer.styled";
import { MENU_LIST } from "../../../utilities/menu-list";
import { StyledDrawerList } from "../../../styles/design-system/molecules/drawer/DrawerList.styled";
import { StyledDrawerNav } from "../../../styles/design-system/molecules/drawer/DrawerNav.styled";
import { StyledDrawerListContainer } from "../../../styles/design-system/molecules/drawer/DrawerListContainer.styled";
import drawerImg from "../../../assets/images/drawerImgs/drawerImg.png";
import { StyledDrawerImg } from "../../../styles/design-system/atoms/drawer/DrawerImg.styled";
type DrawerProps = {
  open: boolean;
};
const Drawer = ({ open }: DrawerProps) => {
  const [selectedId, setSelectedId] = useState(1);

  const handleNavigation = (id: number) => {
    setSelectedId(id);
  };
  return (
    <StyledDrawerContainer open={open}>
      <Logo />
      <StyledDrawerNav>
        <StyledDrawerListContainer>
          {MENU_LIST.map(({ id, name, icon, path }) => (
            <StyledDrawerList
              key={id}
              role="button"
              $active={selectedId === id}
              onClick={() => handleNavigation(id)}
            >
              <div>{icon}</div>
              <a href={"#"}>{name}</a>
            </StyledDrawerList>
          ))}
        </StyledDrawerListContainer>
      </StyledDrawerNav>
      <StyledDrawerImg src={drawerImg} alt="drawer" />
    </StyledDrawerContainer>
  );
};

export default Drawer;
