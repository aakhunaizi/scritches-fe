import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { Grid, MenuItem, TextField, useTheme } from "@material-ui/core";
import {
  SearchContainer,
  StyledCard,
  StyledGrid,
  StyledSearchButton,
} from "./styles";

// Components
import Loading from "../Loading";

// Actions
import { searchSitters } from "../../store/actions/searchActions";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();

  const countries = useSelector((state) => state.locationReducer.countries);
  const services = useSelector((state) => state.petReducer.petTypes);
  const foundQuery = useSelector((state) => state.searchReducer.query);

  const [query, setQuery] = useState(
    foundQuery ?? {
      country: "",
      city: "",
      petPref: "",
      from: "",
      to: "",
    }
  );

  if (!countries || !services) return <Loading />;

  const _country = countries.find((_country) => _country.id === query.country);
  const cities = _country ? _country.cities : null;

  const countryList = countries.map((country) => (
    <MenuItem key={country.id} value={country.id}>
      {country.name}
    </MenuItem>
  ));

  const cityList =
    cities &&
    cities.map((city) => (
      <MenuItem key={city.id} value={city.id}>
        {city.name}
      </MenuItem>
    ));

  const serviceList = services.map((service) => (
    <MenuItem key={service.id} value={service.type}>
      {service.type} Sitting
    </MenuItem>
  ));

  const handleChange = (event) =>
    setQuery({ ...query, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    dispatch(searchSitters(query, history));
  };

  return (
    <SearchContainer>
      <StyledCard className="shadow">
        <StyledGrid container spacing={3} justify="center">
          <Grid item xs={12} sm={4}>
            <TextField
              label="Country"
              name="country"
              variant="outlined"
              defaultValue={query.country}
              onChange={handleChange}
              required
              fullWidth
              select
            >
              {countryList}
            </TextField>
          </Grid>
          {query.country !== "" && (
            <Grid item xs={12} sm={4}>
              <TextField
                label="City"
                name="city"
                variant="outlined"
                defaultValue={query.city}
                onChange={handleChange}
                fullWidth
                select
              >
                {cityList}
              </TextField>
            </Grid>
          )}
          <Grid item xs={12} sm={4}>
            <TextField
              label="Service"
              name="petPref"
              variant="outlined"
              defaultValue={query.petPref}
              onChange={handleChange}
              fullWidth
              select
            >
              {serviceList}
            </TextField>
          </Grid>
        </StyledGrid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              fullWidth
              label="From"
              type="date"
              onChange={handleChange}
              name="from"
              defaultValue={query.from === "" ? new Date() : query.from}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              fullWidth
              label="To"
              type="date"
              defaultValue={query.to === "" ? new Date() : query.to}
              onChange={handleChange}
              name="to"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <StyledGrid container spacing={3} justify="center">
          <Grid item xs={12} sm={4}>
            <StyledSearchButton
              variant="outlined"
              color="inherit"
              theme={theme}
              fullWidth
              onClick={handleSubmit}
              disabled={query.country === ""}
            >
              Search
            </StyledSearchButton>
          </Grid>
        </StyledGrid>
      </StyledCard>
    </SearchContainer>
  );
};

export default Search;
