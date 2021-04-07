// Styling
import { Grid, Typography } from "@material-ui/core";
import { StyledProfileImage } from "./styles";

const UserInfo = ({ profile, theme }) => {
  return (
    <>
      <StyledProfileImage
        src={
          profile.user.image ??
          "http://localhost:8000/media/1617175202259-default_profile_pic.jpg"
        }
        fluid
        roundedCircle
        theme={theme}
      />
      <Typography variant="h6">@{profile.user.username}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">First Name</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.firstName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Last Name</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Email</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Phone Number</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.phoneNumber}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default UserInfo;
