import React from "react";
import { StyledSearchBarContainer } from "../../../styles/design-system/atoms/searchBar/SearchBarContainer.styled";
import SearchIcon from "../icons/lib/SearchIcon";

const SearchBar = () => {
  return (
    <StyledSearchBarContainer>
      <input id="myText" type="text" placeholder="Search your book..." />

      <SearchIcon />
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
