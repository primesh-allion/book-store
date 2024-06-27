import { StyledHeader } from "../../../styles/design-system/organisms/header/Header.styled";
import { HamburgIcon } from "../../atoms/hamburgIcon/HamburgIcon";
type HamburgIconProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const Header = ({ open, setOpen }: HamburgIconProps) => {
  const onClickHamburgMenuItem = () => {
    setOpen(!open);
  };

  return (
    <StyledHeader>
      <HamburgIcon onClickHamburgMenuItem={onClickHamburgMenuItem} />
    </StyledHeader>
  );
};

export default Header;
