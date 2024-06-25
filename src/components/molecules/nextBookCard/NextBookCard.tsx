import { StyledNextBookImg } from "../../../styles/design-system/atoms/nextBook/NextBookImg.styled";
import { StyledNextBookText } from "../../../styles/design-system/atoms/nextBook/NextBookText.styled";
import { StyledNextBookTime } from "../../../styles/design-system/atoms/nextBook/NextBookTime.styled";
import { StyledNextBookCard } from "../../../styles/design-system/molecules/nextBook/NextBookCard.styled";
import { StyledNextBookContent } from "../../../styles/design-system/molecules/nextBook/NextBookContent.styled";

type NextBookCardProps = {
  id: number;
  title: string;
  author: string;
  time: string;
  image: string;
};
const NextBookCard = ({ title, author, time, image }: NextBookCardProps) => {
  return (
    <StyledNextBookCard>
      <StyledNextBookImg src={image} alt="The next book" />
      <StyledNextBookContent>
        <h6>{title}</h6>
        <StyledNextBookText>{author}</StyledNextBookText>
      </StyledNextBookContent>
      <StyledNextBookTime>{time}</StyledNextBookTime>
    </StyledNextBookCard>
  );
};

export default NextBookCard;
