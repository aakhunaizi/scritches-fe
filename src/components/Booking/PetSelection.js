import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PetSelection = ({ booking, setBooking, pet, setPet }) => {
  const pets = useSelector((state) => state.petReducer.pets);

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!pets) return <Loading />;
  const handleListItemClick = (event, index, selectedPet) => {
    setSelectedIndex(index);
    setPet(selectedPet);
    setBooking({ ...booking, petId: selectedPet.id });
  };

  const petsList = pets.map((pet, index) => (
    <Paper key={pet.id} variant="outlined">
      <ListItem
        button
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index, pet)}
      >
        <ListItemIcon>
          <Avatar alt={pet.name} src={pet.image} />
        </ListItemIcon>
        <ListItemText primary={pet.name} secondary={pet.type} />
      </ListItem>
    </Paper>
  ));

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item xs={12} sm={6}>
        {pets.length === 0 ? (
          <Typography>You don't have any pets!</Typography>
        ) : (
          <div className={classes.root}>
            <List component="nav">{petsList}</List>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default PetSelection;
