// Styling
import { Container, StyledImage } from "./styles";

// Assests
import NotFoundImage from "../../assets/NotFound.png";

const NotFound = () => {
  return (
    <Container>
      <StyledImage src={NotFoundImage} />
    </Container>
  );
};

export default NotFound;
