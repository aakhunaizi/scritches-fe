// Styling
import { Typography } from "@material-ui/core";
import { StyledEditButtonMargin, StyledProfileImage } from "./styles";

//Components
import SitterData from "./SitterData";

const UserData = ({ user, theme }) => {
  return (
    <>
      <StyledProfileImage
        src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
        fluid
        roundedCircle
      />
      <Typography variant="h6">@{user.username}</Typography>
      {user.type === "petSitter" && (
        <>
          <SitterData />
          <StyledEditButtonMargin
            variant="outlined"
            color="inherit"
            theme={theme}
          >
            Edit
          </StyledEditButtonMargin>
        </>
      )}
    </>
  );
};

export default UserData;
