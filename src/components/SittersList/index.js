import { useState } from "react";
import { useSelector } from "react-redux";

// Styling
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@material-ui/core";
import { Container, NoResultsContainer, NoResultsImage } from "./styles";

// Assets
import SittersImage from "../../assets/NoSitters.png";

// Components
import Sitter from "./Sitter";
import Loading from "../Loading";
import SearchModifier from "./SearchModifier";

const SittersList = () => {
  const theme = useTheme();

  const [sort, setSort] = useState("");
  const sitters = useSelector((state) => state.searchReducer.sitters);
  const query = useSelector((state) => state.searchReducer.query);

  if (!sitters || !query) return <Loading />;

  const sortSitters = (sitters) => {
    if (sort === "highestPrice")
      return sitters.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      });
    else if (sort === "lowestPrice")
      return sitters.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
    else return sitters;
  };

  const availableSitters = sitters.filter(
    (sitter) => sitter.schedule.length > 0
  );

  const sittersList = sortSitters(availableSitters).map((sitter) => (
    <Sitter sitter={sitter} key={sitter.id} theme={theme} />
  ));

  const handleChange = (event) => {
    setSort(event.target.value);
  };

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
          <Grid container spacing={3} justify="center">
            <Grid item xs={8} sm={3} md={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Sort</InputLabel>
                <Select label="Sort" value={sort} onChange={handleChange}>
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="lowestPrice">Lowest Price</MenuItem>
                  <MenuItem value="highestPrice">Highest Price</MenuItem>
                  <MenuItem value="mostPopular">Most Popular</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center">
            {sittersList}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default SittersList;
