import styled from "styled-components";
import { Image } from "react-bootstrap";
import { Avatar, List, TextField } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.lightBlue.main};
`;

export const StyledImage = styled(Image)`
  max-width: 50%;
`;

export const StyledList = styled(List)`
  width: 100%;
`;

export const StyledTextField = styled(TextField)`
  margin: auto;
`;
