import { useSelector } from "react-redux";

// Styling
import { Grid, useTheme } from "@material-ui/core";
import {
  Container,
  NoResultsContainer,
  NoResultsImage,
  StyledTypography,
  StyledSearchAgainButton,
  StyledLink,
} from "./styles";

// Assets
import SittersImage from "../../assets/Sitters.png";

// Components
import Sitter from "./Sitter";
import Loading from "../Loading";

const SittersList = () => {
  const sitters = useSelector((state) => state.searchReducer.sitters);

  const theme = useTheme();
  if (!sitters) return <Loading />;
  const sittersList = sitters.map((sitter) => (
    <Sitter sitter={sitter} key={sitter.id} theme={theme} />
  ));

  return (
    <>
      {sittersList.length === 0 ? (
        <>
          <NoResultsContainer>
            <NoResultsImage src={SittersImage} />
          </NoResultsContainer>
          <StyledTypography variant="h5">
            No sitters were found 😔
            <br />
            <StyledLink to="/">
              <StyledSearchAgainButton
                variant="outlined"
                color="inherit"
                theme={theme}
              >
                Search Again
              </StyledSearchAgainButton>
            </StyledLink>
          </StyledTypography>
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
