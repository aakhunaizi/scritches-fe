import styled from "styled-components";
import { Button, Avatar, Paper, Divider } from "@material-ui/core";
import { Image, Modal } from "react-bootstrap";

export const StyledEditButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledEditButtonMargin = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
  margin-top: 2%;
`;

export const StyledAddButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledAddButtonFloat = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
  float: right;
`;

export const StyledDetailsButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;

export const StyledProfileImage = styled(Image)`
  width: 50%;
  margin-bottom: 5%;
`;

export const StyledPaper = styled(Paper)`
  margin-bottom: 3%;
`;

export const StyledSaveButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
  float: right;
`;

export const StyledModal = styled(Modal)`
  margin-top: 10em;
`;

export const StyledDivider = styled(Divider)`
  margin-top: 2%;
  margin-bottom: 2%;
`;
