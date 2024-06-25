import { StyledCircularProgressBarCircle } from "../../../styles/design-system/atoms/circularProgressBar/CircularProgressBarCircle.styled";
import { StyledCircularProgressBarContainer } from "../../../styles/design-system/atoms/circularProgressBar/CircularProgressBarContainer.styled";
import { StyledCircularProgressBarFilledCircle } from "../../../styles/design-system/atoms/circularProgressBar/CircularProgressBarFilledCircle.styled";
import { StyledCircularProgressBarText } from "../../../styles/design-system/atoms/circularProgressBar/CircularProgressBarText.styled";

type CircularProgressBarProps = {
  progress: number;
  width?: number;
};
const CircularProgressBar = ({
  progress,
  width = 70,
}: CircularProgressBarProps) => {
  const strokeWidth = 6;
  const radius = 100 / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <StyledCircularProgressBarContainer>
      <svg
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        height={width}
        role="progressbar"
        width={width}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledCircularProgressBarCircle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
        />

        <StyledCircularProgressBarFilledCircle
          cx="50"
          cy="50"
          id="progress-bar-bar"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
        />
      </svg>

      <StyledCircularProgressBarText id="progress-bar-text">
        {Math.floor(progress / 20)}/5
      </StyledCircularProgressBarText>
    </StyledCircularProgressBarContainer>
  );
};

export default CircularProgressBar;
