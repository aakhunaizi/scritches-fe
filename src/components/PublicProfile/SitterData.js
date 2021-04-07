// Styling
import { Grid, Typography } from "@material-ui/core";
import { StyledDivider, StyledTypography } from "./styles";

const SitterData = ({ sitter }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="textSecondary">Location</Typography>
          <Typography variant="h6" component="h2">
            {sitter.city.name}, {sitter.city.country.name}
          </Typography>
          <StyledDivider />
          <Typography color="textSecondary">Bio</Typography>
          <StyledTypography variant="h6" component="h2">
            {sitter.bio}
          </StyledTypography>
          <StyledDivider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Service</Typography>
          <Typography variant="h5" component="h2">
            {sitter.petPref} Sitting
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Price</Typography>
          <Typography variant="h5" component="h2">
            {sitter.price} BHD <Typography variant="caption">/ day</Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SitterData;
