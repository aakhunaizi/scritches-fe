import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// Styling
import { Grid, MenuItem, TextField, useTheme } from "@material-ui/core";
import {
  FieldContainer,
  SearchContainer,
  StyledGrid,
  StyledSearchButton,
} from "./styles";

// Components
import Loading from "../Loading";

// Actions
import { searchSitters } from "../../store/actions/searchActions";

const SearchModifier = ({ foundQuery }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();

  const [query, setQuery] = useState(
    foundQuery ?? {
      country: "",
      city: "",
      petPref: "",
      from: "",
      to: "",
    }
  );

  const countries = useSelector((state) => state.locationReducer.countries);
  const services = useSelector((state) => state.petReducer.petTypes);

  if (!countries || !services) return <Loading />;

  const _country = countries.find((_country) => _country.id === query.country);
  const cities = _country ? _country.cities : null;

  const handleChange = (event) =>
    setQuery({ ...query, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    dispatch(searchSitters(query, history));
  };

  return (
    <SearchContainer>
      <FieldContainer>
        <StyledGrid container spacing={3} justify="center">
          <Grid item xs={12} sm={2}>
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
              {countries.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {query.country !== "" && (
            <Grid item xs={12} sm={2}>
              <TextField
                label="City"
                name="city"
                variant="outlined"
                defaultValue={query.city}
                onChange={handleChange}
                fullWidth
                select
              >
                {cities &&
                  cities.map((city) => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
          )}
          <Grid item xs={12} sm={2}>
            <TextField
              label="Service"
              name="petPref"
              variant="outlined"
              defaultValue={query.petPref}
              onChange={handleChange}
              fullWidth
              select
            >
              {services.map((service) => (
                <MenuItem key={service.id} value={service.type}>
                  {service.type} Sitting
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
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
          <Grid item xs={12} sm={2}>
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
        </StyledGrid>
        <StyledGrid container spacing={3} justify="center">
          <Grid item xs={12} sm={2}>
            <StyledSearchButton
              variant="outlined"
              color="inherit"
              size="large"
              theme={theme}
              fullWidth
              onClick={handleSubmit}
              disabled={query.country === ""}
            >
              Search
            </StyledSearchButton>
          </Grid>
        </StyledGrid>
      </FieldContainer>
    </SearchContainer>
  );
};

export default SearchModifier;
