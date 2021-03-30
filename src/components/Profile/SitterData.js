import { Grid, Typography } from "@material-ui/core";

const SitterData = ({ sitter }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
            {sitter.city.name}, {sitter.city.country.name}
          </Typography>
          <Typography>Bio</Typography>
          <Typography style={{ wordWrap: "break-word" }}>
            {sitter.bio}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SitterData;
