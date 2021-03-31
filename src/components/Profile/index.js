// Styling
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";

// Components
import UserInfo from "./UserInfo";
import OwnerBookingData from "./OwnerBookingData";
import SitterBookingData from "./SitterBookingData";
import SitterSchedule from "./SitterSchedule";
import { Helmet } from "react-helmet";
import OwnerPetList from "./OwnerPetList";
import SitterPetPref from "./SitterPetPref";
import { StyledDivider, StyledPaper } from "./styles";
import { Redirect } from "react-router";
import { fetchSitter } from "../../store/actions/sitterActions";
import { useEffect } from "react";
import SitterData from "./SitterData";

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
  const sitter = useSelector((state) => state.sitterReducer.sitter);

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
              <UserInfo user={user} theme={theme} />
            </StyledPaper>
            {sitter && (
              <StyledPaper className={classes.paper}>
                <SitterData sitter={sitter} />
                <StyledDivider />
                <SitterPetPref sitter={sitter} theme={theme} />
              </StyledPaper>
            )}
            {user.type === "petOwner" && (
              <Paper className={classes.paper}>
                <OwnerPetList theme={theme} />
              </Paper>
            )}
          </Grid>
          <Grid item xs={12} sm={8}>
            {sitter && (
              <>
                <StyledPaper className={classes.paper}>
                  <SitterSchedule user={user} theme={theme} sitter={sitter} />
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
