import { StyledViewAllButton } from "../../../styles/design-system/atoms/buttons/ViewAllButton.styled";
import { StyledAuthorListContainer } from "../../../styles/design-system/molecules/author/AuthorListContainer.styled";
import { StyledSectionHeader } from "../../../styles/design-system/molecules/sectionHeader/SectionHeader.styled";
import { StyledListContainer } from "../../../styles/design-system/organisms/listContainer/ListContainer.styled";
import { AUTHORS_LIST } from "../../../utilities/authors-list";
import Author from "../../molecules/author/Author";

const AuthorsList = () => {
  return (
    <StyledAuthorListContainer>
      <StyledSectionHeader>
        <h2>Top Authors</h2>
        <StyledViewAllButton role="button">View all</StyledViewAllButton>
      </StyledSectionHeader>
      <StyledListContainer>
        {AUTHORS_LIST.map(({ name, image, id }) => (
          <Author index={id} name={name} image={image} />
        ))}
      </StyledListContainer>
    </StyledAuthorListContainer>
  );
};

export default AuthorsList;
