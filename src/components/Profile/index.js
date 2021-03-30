// Styling
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";

// Components
import UserInfo from "./UserInfo";
import UserData from "./UserData";
import OwnerBookingData from "./OwnerBookingData";
import SitterBookingData from "./SitterBookingData";
import SitterSchedule from "./SitterSchedule";
import { Helmet } from "react-helmet";
import OwnerPetList from "./OwnerPetList";
import SitterPetPref from "./SitterPetPref";
import { StyledPaper } from "./styles";
import { Redirect } from "react-router";
import { fetchSitter } from "../../store/actions/userActions";
import { useEffect } from "react";

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
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const sitter = useSelector((state) => state.userReducer.sitter);
  console.log(sitter);

  useEffect(() => {
    if (user && user.type === "petSitter")
      dispatch(fetchSitter({ userId: user.id }));
  }, [dispatch, user]);

  const theme = useTheme();

  if (!user) return <Redirect to="/" />;

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledPaper className={classes.paper}>
              <UserData user={user} theme={theme} />
            </StyledPaper>
            <StyledPaper className={classes.paper}>
              <UserInfo user={user} theme={theme} />
            </StyledPaper>
            <Paper className={classes.paper}>
              {user.type === "petOwner" ? (
                <OwnerPetList theme={theme} />
              ) : (
                user.type === "petSitter" && <SitterPetPref theme={theme} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            {user.type === "petSitter" && (
              <>
                <StyledPaper className={classes.paper}>
                  <SitterSchedule user={user} theme={theme} />
                </StyledPaper>
              </>
            )}

            <Paper className={classes.paper}>
              {user.type === "petOwner" ? (
                <OwnerBookingData theme={theme} />
              ) : (
                user.type === "petSitter" && <SitterBookingData theme={theme} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </div>
    </>
  );
}
