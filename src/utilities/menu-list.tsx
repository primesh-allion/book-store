import {
  CategoriesIcon,
  FavoriteIcon,
  HomeIcon,
  LibraryIcon,
  SettingsIcon,
  LogoutIcon,
} from "../components/atoms/icons";

export const MENU_LIST = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Categories",
    path: "categories",
    icon: <CategoriesIcon />,
  },
  {
    id: 3,
    name: "Favorite",
    path: "/favorite",
    icon: <FavoriteIcon />,
  },
  {
    id: 4,
    name: "Your Library",
    path: "/library",
    icon: <LibraryIcon />,
  },
  {
    id: 5,
    name: "Setting",
    path: "/setting",
    icon: <SettingsIcon />,
  },
  {
    id: 6,
    name: "Log out",
    path: "/logout",
    icon: <LogoutIcon />,
  },
];
