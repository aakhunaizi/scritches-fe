import { useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

// Styling
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { StyledPaper, StyledPaperMargin, StyledProfile } from "./styles";

// Components
import Loading from "../Loading";
import OwnerBookingData from "./OwnerBookingData";
import OwnerPetList from "./OwnerPetList";
import SitterBookingData from "./SitterBookingData";
import SitterData from "./SitterData";
import SitterSchedule from "./SitterSchedule";
import UserInfo from "./UserInfo";

// Actions
import { fetchProfile } from "../../store/actions/userActions";

export default function Profile() {
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
      <StyledProfile>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledPaperMargin>
              <UserInfo profile={profile} theme={theme} user={user} />
            </StyledPaperMargin>
            {user.type === "petSitter" && (
              <StyledPaperMargin>
                <SitterData sitter={profile} theme={theme} userId={user.id} />
              </StyledPaperMargin>
            )}
            {user.type === "petOwner" && (
              <StyledPaper>
                <OwnerPetList theme={theme} owner={profile} />
              </StyledPaper>
            )}
          </Grid>
          <Grid item xs={12} sm={8}>
            {user.type === "petSitter" && (
              <>
                <StyledPaperMargin>
                  <SitterSchedule user={user} theme={theme} sitter={profile} />
                </StyledPaperMargin>
              </>
            )}
            <StyledPaper>
              {user.type === "petOwner" ? (
                <OwnerBookingData theme={theme} />
              ) : (
                <SitterBookingData theme={theme} />
              )}
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </StyledProfile>
    </>
  );
}
