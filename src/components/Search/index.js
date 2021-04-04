import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Card, TextField, useTheme } from "@material-ui/core";
import { StyledSearchButton } from "./styles";

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

export default function Search() {
  const classes = useStyles();
  const theme = useTheme();
  const countries = ["Bahrain"];
  const cities = ["Manama", "Saar"];
  const services = ["Dog Sitting", "Cat Sitting"];
  const [query, setQuery] = useState({
    country: "",
    city: "",
    service: "",
    from: "",
    to: "",
  });

  const handleChange = (event) =>
    setQuery({ ...query, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    console.log(query);
  };

  return (
    <div className={classes.root}>
      <Card
        style={{
          padding: "5%",
          width: "80%",
          margin: "0 auto",
          backgroundColor: "rgba(244, 243, 238, 0.9)",
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
            <Autocomplete
              options={countries}
              value={query.country}
              onChange={(event, newValue) => {
                setQuery({ ...query, country: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  variant="outlined"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Autocomplete
              options={cities}
              onChange={(event, newValue) => {
                setQuery({ ...query, city: newValue });
              }}
              name="city"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  variant="outlined"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Autocomplete
              options={services}
              onChange={(event, newValue) => {
                setQuery({ ...query, service: newValue });
              }}
              name="service"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Service"
                  variant="outlined"
                  required
                />
              )}
            />
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
}
