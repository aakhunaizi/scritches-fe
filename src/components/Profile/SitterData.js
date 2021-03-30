import { Grid, Typography } from "@material-ui/core";

const SitterData = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>location</Typography>
          <Typography>Bio</Typography>
          <Typography style={{ wordWrap: "break-word" }}>
            hgegiruhgiihgolghlfkhgfghfggkfghrigljdm.sfnlbfj's;lkdfngjkfbg
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SitterData;
