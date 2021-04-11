import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Grid, Paper } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBookButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  margin: auto;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledGrid = styled(Grid)`
  margin: auto;
`;

export const StyledIcon = styled(FiberManualRecordIcon)`
  color: ${(props) => props.theme.palette.orange.main};
`;

export const StyledLink = styled(Link)`
  margin: auto;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledPaperMargin = styled(Paper)`
  text-align: center;
  padding: 3%;
  margin-bottom: 3%;
`;

export const StyledProfile = styled.div`
  flex-grow: 1;
  margin: 5em 2em;
`;

export const StyledSchedule = (theme) => `
  .DayPicker-Day--highlighted {
    background-color: ${theme.palette.orange.main};
    color: white;
  }
`;
