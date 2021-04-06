import { useSelector } from "react-redux";

// Styling
import { Grid, useTheme } from "@material-ui/core";
import { Container, NoResultsContainer, NoResultsImage } from "./styles";

// Assets
import SittersImage from "../../assets/NoSitters.png";

// Components
import Sitter from "./Sitter";
import Loading from "../Loading";
import SearchModifier from "./SearchModifier";

const SittersList = () => {
  const sitters = useSelector((state) => state.searchReducer.sitters);
  const query = useSelector((state) => state.searchReducer.query);

  const theme = useTheme();
  if (!sitters || !query) return <Loading />;
  const sittersList = sitters.map((sitter) => (
    <Sitter sitter={sitter} key={sitter.id} theme={theme} />
  ));

  return (
    <>
      <SearchModifier foundQuery={query} />
      {sittersList.length === 0 ? (
        <>
          <NoResultsContainer>
            <NoResultsImage src={SittersImage} />
          </NoResultsContainer>
        </>
      ) : (
        <Container>
          <Grid container spacing={3} justify="center" alignItems="stretch">
            {sittersList}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default SittersList;
