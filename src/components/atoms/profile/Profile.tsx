import React from "react";
import { StyledProfileContainer } from "../../../styles/design-system/atoms/profile/ProfileContainer.styled";
import profileImg from "../../../assets/images/profile/profileImg.png";
import { StyledProfileImg } from "../../../styles/design-system/atoms/profile/ProfileImg.styled";
import { ArrowDownIcon } from "../icons";
import { StyledProfileContent } from "../../../styles/design-system/atoms/profile/ProfileContent.styled";

const Profile = () => {
  return (
    <StyledProfileContainer>
      <StyledProfileContent>
        <StyledProfileImg src={profileImg} alt="profile" />
        <h5>Thanh Pham</h5>
      </StyledProfileContent>
      <ArrowDownIcon />
    </StyledProfileContainer>
  );
};

export default Profile;
