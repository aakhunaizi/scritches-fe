import styled from "styled-components";
import { Button, Avatar } from "@material-ui/core";

export const StyledEditButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
`;

export const StyledAddButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  float: right;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;
