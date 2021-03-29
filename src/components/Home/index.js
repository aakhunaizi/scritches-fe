// Styling
import { Description, Image, Title, Button, Container } from "./styles";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Title>Scritches</Title>
      <Description>Your pet is safe with us</Description>
      <Image
        alt="pet sitter"
        src="https://www.fetchpetcare.com/wp-content/uploads/2014/07/bigstock-152145332.jpg"
      />
      <br />
      <Container>
        <Button>Sign in as a Pet Owner</Button>
        <Button primary>Become a Pet Sitter</Button>
      </Container>
    </>
  );
};

export default Home;
