import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
import { FaUserCircle } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

export const LogoLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;

export const MenuLinkWhite = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;

export const StyledFaUserCircle = styled(FaUserCircle)`
  margin-right: 20px;
  margin-left: 15px;
  cursor: pointer;
`;

export const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledTitle = styled(Typography)`
  flex-grow: 1;
  margin-left: 0.5%;
  font-family: "Indie Flower", cursive;
`;

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 0,
  },
}));
