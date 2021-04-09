import styled from "styled-components";
import { Image } from "react-bootstrap";
import {
  Avatar,
  Button,
  List,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;

export const StyledBackButton = styled(Button)`
  color: ${(props) => props.theme.palette.darkGrey.light};
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.palette.darkGrey.light};
  }
`;

export const StyledButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.light};
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.palette.orange.main};
  }
`;

export const StyledImage = styled(Image)`
  max-width: 70%;
`;

export const StyledLink = styled(Link)`
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

export const StyledList = styled(List)`
  width: 100%;
`;

export const StyledPaper = styled(Paper)`
  padding: 3%;
  text-align: center;
`;

export const StyledPetPaper = styled(Paper)`
  margin: 3%;
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  margin: auto;
`;

export const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: theme.spacing(10),
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(900 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  icon: {
    color: "#87BCDE",
    "&$activeIcon": {
      color: "#26658C",
    },
    "&$completedIcon": {
      color: "#EB5E28",
    },
  },
  activeIcon: {},
  completedIcon: {},
}));
