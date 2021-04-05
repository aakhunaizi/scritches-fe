// Styling
import { useTheme } from "@material-ui/core";
import { StyledLoading } from "./styles";

const Loading = () => {
  const theme = useTheme();
  return <StyledLoading color="inherit" theme={theme} />;
};

export default Loading;
