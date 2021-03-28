import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { AppBar, MenuItem } from "@material-ui/core";

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

export const StyledFaRegUserCircle = styled(FaRegUserCircle)`
  margin-right: 10px;
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
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

export const StyledMenuItem = styled(MenuItem)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;
