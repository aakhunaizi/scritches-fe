import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-align: center;
`;

export const FieldContainer = styled.div`
  padding: 5%;
  width: 90%;
  margin: auto;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const NoResultsImage = styled(Image)`
  max-width: 40%;
`;

export const SearchContainer = styled.div`
  margin-top: 5em;
  margin-left: 3em;
  margin-right: 3em;
  margin-bottom: -4%;
`;

export const StyledBookButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  margin: 3% auto;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;
export const StyledGrid = styled(Grid)`
  margin-bottom: 1%;
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

export const StyledProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  margin: 5%;
`;

export const StyledSearchButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;
