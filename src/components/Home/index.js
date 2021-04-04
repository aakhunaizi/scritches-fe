import { Link } from "react-router-dom";

// Styling
import {
  Description,
  StyledHome,
  Image,
  Title,
  Button,
  Container,
} from "./styles";

const Home = () => {
  return (
    <StyledHome>
      <Title>Scritches</Title>
      <Description>Your pet is safe with us</Description>
      <Image
        alt="pet sitter"
        src="https://www.fetchpetcare.com/wp-content/uploads/2014/07/bigstock-152145332.jpg"
      />
      <Container>
        <Link to="/search">
          <Button>Search</Button>
        </Link>
        <Link to={{ pathname: "/signup", state: { type: "petSitter" } }}>
          <Button primary>Become a Pet Sitter</Button>
        </Link>
      </Container>
    </StyledHome>
  );
};

export default Home;
