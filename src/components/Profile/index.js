import { useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

// Styling
import { Grid, useTheme } from "@material-ui/core";
import { StyledPaper, StyledPaperMargin, StyledProfile } from "./styles";

// Components
import Loading from "../Loading";
import BookingData from "./BookingData";
import OwnerPetList from "./OwnerPetList";
import SitterData from "./SitterData";
import SitterSchedule from "./SitterSchedule";
import UserData from "./UserData";

// Actions
import { fetchProfile } from "../../store/actions/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const user = useSelector((state) => state.userReducer.user);
  const profile = useSelector((state) => state.userReducer.profile);

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
      <StyledProfile>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledPaperMargin>
              <UserData profile={profile} theme={theme} user={user} />
            </StyledPaperMargin>
            {user && user.type === "petSitter" ? (
              <StyledPaperMargin>
                <SitterData sitter={profile} theme={theme} userId={user.id} />
              </StyledPaperMargin>
            ) : (
              <StyledPaper>
                <OwnerPetList theme={theme} owner={profile} />
              </StyledPaper>
            )}
          </Grid>
          <Grid item xs={12} sm={8}>
            {user.type === "petSitter" && (
              <StyledPaperMargin>
                <SitterSchedule sitter={profile} theme={theme} />
              </StyledPaperMargin>
            )}
            <StyledPaper>
              <BookingData theme={theme} />
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledProfile>
    </>
  );
};

export default Profile;
