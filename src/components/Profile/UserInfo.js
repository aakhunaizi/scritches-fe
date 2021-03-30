// Styling
import { Grid, Typography, useTheme } from "@material-ui/core";
import { StyledEditButtonMargin } from "./styles";

const UserInfo = ({ user }) => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">First Name</Typography>
          <Typography variant="h5" component="h2">
            {user.firstName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Last Name</Typography>
          <Typography variant="h5" component="h2">
            {user.lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Email</Typography>
          <Typography variant="h5" component="h2">
            {user.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Phone Number</Typography>
          <Typography variant="h5" component="h2">
            {user.phoneNumber}
          </Typography>
        </Grid>
      </Grid>
      <StyledEditButtonMargin variant="outlined" color="inherit" theme={theme}>
        Edit
      </StyledEditButtonMargin>
    </>
  );
};

export default UserInfo;
