import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, MenuItem, TextField, useTheme } from "@material-ui/core";
import { StyledSearchButton } from "./styles";

// Components
import Loading from "../Loading";

// Actions
import { searchSitters } from "../../store/actions/searchActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const classes = useStyles();

  const [query, setQuery] = useState({
    country: "",
    city: "",
    petPref: "",
    from: "",
    to: "",
  });

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
    <div className={classes.root}>
      <Card
        style={{
          padding: "5%",
          width: "80%",
          margin: "0 auto",
          backgroundColor: "rgba(254, 254, 253, 0.9)",
        }}
        className="shadow"
      >
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ marginBottom: "1%" }}
        >
          <Grid item xs={12} sm={4}>
            <TextField
              label="Country"
              name="country"
              variant="outlined"
              onChange={handleChange}
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
            <Grid item xs={12} sm={4}>
              <TextField
                label="City"
                name="city"
                variant="outlined"
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
          <Grid item xs={12} sm={4}>
            <TextField
              label="Service"
              name="petPref"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              select
            >
              {services.map((service) => (
                <MenuItem key={service.id} value={service.type}>
                  {service.type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              fullWidth
              label="From"
              type="date"
              onChange={handleChange}
              name="from"
              defaultValue={new Date()}
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
              onChange={handleChange}
              name="to"
              defaultValue={new Date()}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ marginTop: "1%" }}
        >
          <Grid item xs={12} sm={4}>
            <StyledSearchButton
              variant="outlined"
              color="inherit"
              theme={theme}
              fullWidth
              onClick={handleSubmit}
            >
              Search
            </StyledSearchButton>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Search;
