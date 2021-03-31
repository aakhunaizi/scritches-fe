import { Grid, Typography } from "@material-ui/core";
import { StyledDivider } from "./styles";

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
          <Typography
            style={{ wordWrap: "break-word" }}
            variant="h6"
            component="h2"
          >
            {sitter.bio}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SitterData;
