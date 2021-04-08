import styled from "styled-components";
import { Image, Modal } from "react-bootstrap";
import { Button, Avatar, Paper, Divider, Typography } from "@material-ui/core";

export const StyledAddButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  margin: 2%;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledAddButtonFloat = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  float: right;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;

export const StyledEditButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledEditButtonMargin = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  margin-top: 3%;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledDetailsButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledDivider = styled(Divider)`
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const StyledModal = styled(Modal)`
  margin-top: 10em;
`;

export const StyledPaper = styled(Paper)`
  text-align: center;
  padding: 3%;
`;

export const StyledPaperMargin = styled(Paper)`
  text-align: center;
  padding: 3%;
  margin-bottom: 3%;
`;

export const StyledProfile = styled.div`
  flex-grow: 1;
  margin: 5em 2em;
`;

export const StyledProfileImage = styled(Image)`
  width: 200px;
  height: 200px;
  margin-bottom: 5%;
`;

export const StyledSaveButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  float: right;
  margin: 2%;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const StyledTypography = styled(Typography)`
  word-wrap: break-word;
`;

export const StyledUploadButton = styled(Button)`
  color: ${(props) => props.theme.palette.orange.main};
  float: right;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
    color: white;
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
