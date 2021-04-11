import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Grid, MenuItem, TextField, Typography } from "@material-ui/core";
import {
  StyledAddButtonMargin,
  StyledGrid,
  StyledIcon,
  StyledSchedule,
} from "./styles";

// Components
import Loading from "../Loading";

// Actions
import { addDate, deleteDate } from "../../store/actions/scheduleActions";

const SitterSchedule = ({ sitter, theme }) => {
  const dispatch = useDispatch();

  const [dates, setDates] = useState({ addDate: null, deleteDate: null });
  const schedule = useSelector((state) => state.scheduleReducer.schedule);

  if (!sitter || !schedule) return <Loading />;

  const handleChange = (event) =>
    setDates({ ...dates, [event.target.name]: event.target.value });

  const handleDayChange = (day) => {
    setDates({ ...dates, addDate: day.toISOString().slice(0, 10) });
  };

  const handleAdd = () => {
    dispatch(addDate(sitter.id, dates.addDate));
    setDates({ ...dates, addDate: null });
  };

  const handleDelete = () => {
    dispatch(deleteDate(dates.deleteDate));
    setDates({ ...dates, deleteDate: null });
  };

  const modifiers = {
    highlighted: schedule.map((item) => new Date(item.date)),
  };

  schedule.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });

  const datesList = schedule.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.date}
    </MenuItem>
  ));

  return (
    <>
      <Grid container alignContent="center">
        <StyledGrid item xs={12} sm={4}>
          <Typography>
            <StyledIcon theme={theme} />
            Available Dates
          </Typography>
          <style>{StyledSchedule(theme)}</style>
          <DayPicker modifiers={modifiers} showOutsideDays />
        </StyledGrid>
        <StyledGrid item xs={12} sm={4}>
          <Grid item xs={12}>
            <TextField
              label="Delete Date"
              name="deleteDate"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              select
            >
              {datesList}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <StyledAddButtonMargin
              variant="outlined"
              color="inherit"
              theme={theme}
              onClick={handleDelete}
              disabled={!dates.deleteDate}
            >
              Delete
            </StyledAddButtonMargin>
          </Grid>
          <Grid item xs={12}>
            <DayPickerInput
              value={dates.addDate}
              placeholder="Add Date"
              onDayChange={(day) => handleDayChange(day)}
              inputProps={{ style: { height: 55 } }}
              dayPickerProps={{
                disabledDays: [
                  { before: new Date() },
                  ...modifiers.highlighted,
                ],
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledAddButtonMargin
              variant="outlined"
              color="inherit"
              theme={theme}
              onClick={handleAdd}
              disabled={!dates.addDate}
            >
              Add
            </StyledAddButtonMargin>
          </Grid>
        </StyledGrid>
      </Grid>
    </>
  );
};

export default SitterSchedule;
