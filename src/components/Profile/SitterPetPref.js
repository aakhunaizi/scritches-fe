import { Chip, Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const SitterPetPref = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    // Display Pet Preferences
    <div style={{ marginRight: 200 }}>
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
      <Button variant="outlined" color="primary" style={{ marginTop: "2%" }}>
        Edit
      </Button>
    </div>
  );
};

export default SitterPetPref;
