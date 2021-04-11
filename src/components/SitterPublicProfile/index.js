import { Redirect, useLocation } from "react-router";

// Styling
import { Grid, useTheme } from "@material-ui/core";
import { ScheduleContainer, StyledPaperMargin, StyledProfile } from "./styles";

// Components
import UserData from "../Profile/UserData";
import SitterData from "../Profile/SitterData";
import SitterSchedule from "./Schedule";

const SitterPublicProfile = () => {
  const theme = useTheme();

  const sitter = useLocation().state.sitter;

  if (!sitter) return <Redirect to="/" />;

  return (
    <>
      <StyledProfile>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={8}>
            <StyledPaperMargin>
              <UserData
                profile={sitter}
                theme={theme}
                user={sitter.user}
                type="public"
              />
            </StyledPaperMargin>
          </Grid>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} sm={4}>
              <StyledPaperMargin>
                <SitterData sitter={sitter} theme={theme} />
              </StyledPaperMargin>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledPaperMargin>
                <ScheduleContainer>
                  <SitterSchedule sitter={sitter} theme={theme} />
                </ScheduleContainer>
              </StyledPaperMargin>
            </Grid>
          </Grid>
        </Grid>
      </StyledProfile>
    </>
  );
};

export default SitterPublicProfile;
