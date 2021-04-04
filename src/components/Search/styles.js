import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledSearchButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;
