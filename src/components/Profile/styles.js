import styled from "styled-components";
import { Button, Avatar } from "@material-ui/core";
import { Image } from "react-bootstrap";

export const StyledEditButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
`;

export const StyledEditButtonMargin = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  margin-top: 2%;
`;

export const StyledAddButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  float: right;
`;

export const StyledDetailsButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;

export const StyledProfileImage = styled(Image)`
  width: 50%;
  margin-bottom: 5%;
`;
