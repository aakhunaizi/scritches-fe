import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { Grid, MenuItem, TextField } from "@material-ui/core";
import { StyledSaveButton } from "./styles";

// Components
import Loading from "../Loading";

// Actions
import { updateSitter } from "../../store/actions/userActions";

const SitterForm = ({
  handleClose,
  sitter,
  setSitterData,
  sitterData,
  theme,
}) => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState(
    sitter.city ? sitter.city.country.id : null
  );

  const countries = useSelector((state) => state.locationReducer.countries);
  const pets = useSelector((state) => state.petReducer.petTypes);

  if (!countries || !pets) return <Loading />;

  const foundCountry = countries.find((_country) => _country.id === country);
  const citiesList = !foundCountry
    ? null
    : foundCountry.cities.map((city) => (
        <MenuItem key={city.id} value={city.id}>
          {city.name}
        </MenuItem>
      ));

  const handleChange = (event) =>
    setSitterData({ ...sitterData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSitter(sitterData));
    handleClose();
  };

  const countriesList = countries.map((country) => (
    <MenuItem key={country.id} value={country.id}>
      {country.name}
    </MenuItem>
  ));

  const petsList = pets.map((pet) => (
    <MenuItem key={pet.id} value={pet.type}>
      {pet.type} Sitting
    </MenuItem>
  ));

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            variant="outlined"
            defaultValue={sitter.city ? sitter.city.country.id : 0}
            onChange={(event) => setCountry(event.target.value)}
            fullWidth
            select
          >
            {countriesList}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="outlined"
            name="cityId"
            defaultValue={sitter.city ? sitter.city.id : 0}
            onChange={handleChange}
            fullWidth
            select
          >
            {citiesList}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Bio"
            variant="outlined"
            name="bio"
            defaultValue={sitter.bio}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Service"
            variant="outlined"
            name="petPref"
            defaultValue={sitter.petPref}
            onChange={handleChange}
            fullWidth
            select
          >
            {petsList}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            variant="outlined"
            name="price"
            type="number"
            defaultValue={sitter.price}
            InputProps={{ inputProps: { min: 1 } }}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid container justify="flex-end">
          <StyledSaveButton
            type="submit"
            variant="outlined"
            color="inherit"
            theme={theme}
          >
            Save
          </StyledSaveButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SitterForm;
