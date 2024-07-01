import styled from "styled-components";

export const StyledAudioBookCard = styled.div<{ background: string }>`
  width: 296px;
  height: 331px;
  border-radius: 16px;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.05);
  background-color: var(--base-white-color);
  margin-bottom: 32px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 20px;
`;
