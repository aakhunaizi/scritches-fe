import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-align: center;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const StyledProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  margin: 5%;
`;

export const StyledBookButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  margin: 3% auto;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const NoResultsImage = styled(Image)`
  max-width: 40%;
`;

export const StyledSearchButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
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
