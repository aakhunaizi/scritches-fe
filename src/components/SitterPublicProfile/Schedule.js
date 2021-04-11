// Styling
import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";
import { Grid, Typography } from "@material-ui/core";
import {
  StyledSchedule,
  StyledGrid,
  StyledIcon,
  StyledLink,
  StyledBookButton,
} from "./styles";

const Schedule = ({ sitter, theme, type }) => {
  const modifiers = {
    highlighted: sitter.schedule.map((schedule) => new Date(schedule.date)),
  };

  return (
    <Grid container>
      <StyledGrid item xs={12}>
        <Typography align="center">
          <StyledIcon theme={theme} />
          Available Dates
        </Typography>
        <style>{StyledSchedule(theme)}</style>
        <DayPicker modifiers={modifiers} showOutsideDays />
      </StyledGrid>
      {!type && (
        <StyledGrid item xs={12}>
          <StyledLink to={{ pathname: "/booking", state: { sitter: sitter } }}>
            <StyledBookButton variant="outlined" color="inherit" theme={theme}>
              Book
            </StyledBookButton>
          </StyledLink>
        </StyledGrid>
      )}
    </Grid>
  );
};

export default Schedule;
