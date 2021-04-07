import { Redirect, useParams } from "react-router";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

// Styling
import { Grid, useTheme } from "@material-ui/core";
import { StyledPaperMargin, StyledProfile } from "./styles";

// Components
import UserData from "./UserData";
import SitterData from "./SitterData";
import SitterSchedule from "./SitterSchedule";

// Actions

const PublicProfile = () => {
  const theme = useTheme();
  const sitterUsername = useParams().username;
  const sitters = useSelector((state) => state.searchReducer.sitters);
  if (!sitters) return <Redirect to="/" />;
  const sitter = sitters.find(
    (sitter) => sitter.user.username === sitterUsername
  );

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <StyledProfile>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={8}>
            <StyledPaperMargin>
              <UserData profile={sitter} theme={theme} user={sitter} />
            </StyledPaperMargin>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={4}>
            <StyledPaperMargin>
              <SitterData sitter={sitter} />
            </StyledPaperMargin>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledPaperMargin>
              <SitterData sitter={sitter} />
            </StyledPaperMargin>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={8}>
            <StyledPaperMargin>
              <SitterSchedule />
            </StyledPaperMargin>
          </Grid>
        </Grid>
      </StyledProfile>
    </>
  );
};

export default PublicProfile;
