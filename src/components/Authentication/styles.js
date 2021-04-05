import styled from "styled-components";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const StyledAvatar = styled(Avatar)`
  background-color: ${(props) => props.theme.palette.orange.main};
`;

export const StyledMdVisibility = styled(MdVisibility)`
  cursor: pointer;
`;

export const StyledMdVisibilityOff = styled(MdVisibilityOff)`
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.orange.light};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.palette.orange.main};
  }
`;

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: { margin: theme.spacing(1) },
  form: { width: "100%", marginTop: theme.spacing(3) },
  submit: { margin: theme.spacing(3, 0, 2) },
}));
