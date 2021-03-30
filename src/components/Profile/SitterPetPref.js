import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { StyledEditButtonMargin } from "./styles";

const SitterPetPref = ({ theme }) => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    // Display Pet Preferences
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Pet Preference</Typography>
          <Typography variant="h5" component="h2">
            -
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Price</Typography>
          <Typography variant="h5" component="h2">
            0
          </Typography>
        </Grid>
      </Grid>
      <StyledEditButtonMargin variant="outlined" color="inherit" theme={theme}>
        Edit
      </StyledEditButtonMargin>
    </div>
  );
};

export default SitterPetPref;
