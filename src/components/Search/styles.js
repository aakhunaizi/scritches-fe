import styled from "styled-components";
import { Button, Card, Grid } from "@material-ui/core";

export const StyledSearchButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledCard = styled(Card)`
  padding: 5%;
  width: 80%;
  margin: auto;
  background-color: rgba(254, 254, 253, 0.9);
`;

export const SearchContainer = styled.div`
  margin-top: 4em;
  margin-left: 3em;
  margin-right: 3em;
`;

export const StyledGrid = styled(Grid)`
  margin-bottom: 1%;
`;
