import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Image + Username Image</Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>Account Details</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}> Pets / Services</Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>Schedule</Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>Bookings</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
