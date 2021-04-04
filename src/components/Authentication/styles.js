import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

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
