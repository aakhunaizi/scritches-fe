import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Button from "@material-ui/core/Button";

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
