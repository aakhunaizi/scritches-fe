// Styling
import { BackgroundContainer } from "./styles";

// Components
import Accordions from "./Accordions";
import Cards from "./Cards";
import Search from "../Search";

const Home = () => {
  return (
    <>
      <BackgroundContainer>
        <Search />
      </BackgroundContainer>
      <Cards />
      <Accordions />
    </>
  );
};

export default Home;
