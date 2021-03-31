// Styling
import { Typography } from "@material-ui/core";
import { StyledEditButtonMargin, StyledProfileImage } from "./styles";

//Components
import SitterData from "./SitterData";

const UserData = ({ user, theme, sitter }) => {
  return (
    <>
      {sitter && (
        <>
          <SitterData sitter={sitter} theme={theme} />
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
