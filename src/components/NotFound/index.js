// Styling
import { Container, StyledImage } from "./styles";
import NotFoundImage from "../Media/NotFound.png";
const NotFound = () => {
  return (
    <Container>
      <StyledImage src={NotFoundImage} />
    </Container>
  );
};

export default NotFound;
