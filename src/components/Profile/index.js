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
import { Helmet } from "react-helmet-async";
import OwnerPetList from "./OwnerPetList";
import { StyledPaper } from "./styles";
import { Redirect } from "react-router";
import { useEffect } from "react";
import SitterData from "./SitterData";
import Swal from "sweetalert2";
import { fetchProfile } from "../../store/actions/userActions";
import Loading from "../Loading";

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
  const theme = useTheme();

  const user = useSelector((state) => state.userReducer.user);
  const profile = useSelector((state) => state.userReducer.profile);
  console.log("🚀 ~ file: index.js ~ line 41 ~ Profile ~ profile", profile);

  useEffect(() => {
    if (user) dispatch(fetchProfile(user.type));
  }, [dispatch, user]);

  if (!user) return <Redirect to="/" />;
  if (!profile) return <Loading />;

  if (
    user.type === "petSitter" &&
    (!profile.city ||
      !profile.bio ||
      profile.price === 0 ||
      !profile.petPref ||
      profile.schedule.length === 0)
  )
    Swal.fire({
      icon: "info",
      title: "Complete your profile to recieve bookings",
    });

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
            {user.type === "petSitter" && (
              <StyledPaper className={classes.paper}>
                <SitterData sitter={profile} theme={theme} userId={user.id} />
              </StyledPaper>
            )}
            {user.type === "petOwner" && (
              <Paper className={classes.paper}>
                <OwnerPetList theme={theme} owner={profile} />
              </Paper>
            )}
          </Grid>
          <Grid item xs={12} sm={8}>
            {user.type === "petSitter" && (
              <>
                <StyledPaper className={classes.paper}>
                  <SitterSchedule user={user} theme={theme} sitter={profile} />
                </StyledPaper>
              </>
            )}
            <Paper className={classes.paper}>
              {user.type === "petOwner" ? (
                <OwnerBookingData theme={theme} />
              ) : (
                <SitterBookingData theme={theme} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </div>
    </>
  );
}
