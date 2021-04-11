import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const StyledLoading = styled(CircularProgress)`
  margin: 50% 50%;
  color: ${(props) => props.theme.palette.orange.main};
`;
