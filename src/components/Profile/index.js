// Styling
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { FaCalendarCheck } from "react-icons/fa";
import { Avatar } from "@material-ui/core";

// Components
import UserInfo from "./UserInfo";
import UserData from "./UserData";
import OwnerBookingData from "./OwnerBookingData";
import SitterBookingData from "./SitterBookingData";
import SitterSchedule from "./SitterSchedule";
import Pets from "./Pets";

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

  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <UserData user={user} />
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <UserInfo user={user} />
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <Pets />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <SitterSchedule user={user} />
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <Avatar>
              <FaCalendarCheck />
            </Avatar>
            {user.type === "petOwner" ? (
              <OwnerBookingData />
            ) : (
              user.type === "petSitter" && <SitterBookingData />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
    </div>
  );
}
