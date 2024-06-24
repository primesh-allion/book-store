import { StyledSummeryImg } from "../../../styles/design-system/atoms/summery/SummeryImg.styled";
import { StyledSummeryName } from "../../../styles/design-system/atoms/summery/SummeryName.styled";
import { StyledSummeryCard } from "../../../styles/design-system/molecules/summery/SummeryCard.styled";
import { StyledSummeryContent } from "../../../styles/design-system/molecules/summery/SummeryContent.styled";
import { StyledSummeryImgContainer } from "../../../styles/design-system/molecules/summery/SummeryImgContainer.styled";

type SummeryCardProps = {
  title: string;
  description: string;
  image: string;
  id: number;
};

const SummeryCard = ({ title, description, image, id }: SummeryCardProps) => {
  return (
    <StyledSummeryCard key={id}>
      <StyledSummeryImgContainer>
        <StyledSummeryImg src={image} alt={title} />
      </StyledSummeryImgContainer>
      <StyledSummeryContent>
        <h2>{title}</h2>
        <StyledSummeryName>{description}</StyledSummeryName>
      </StyledSummeryContent>
    </StyledSummeryCard>
  );
};

export default SummeryCard;
