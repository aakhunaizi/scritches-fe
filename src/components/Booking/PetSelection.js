import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styling
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

// assets
import PlayfulCat from "../../assets/PlayfulCat.png";

// Components
import Loading from "../Loading";
import { Container, StyledImage, StyledPetPaper } from "./styles";

const PetSelection = ({ booking, setBooking, pet, setPet, sitterPetPref }) => {
  const [selectedIndex, setSelectedIndex] = useState(pet ? pet.index : null);
  const pets = useSelector((state) => state.petReducer.pets);

  if (!pets) return <Loading />;

  const handleListItemClick = (event, index, selectedPet) => {
    setSelectedIndex(index);
    setPet({ ...selectedPet, index });
    setBooking({ ...booking, petId: selectedPet.id });
  };

  const petsList = pets.map((pet, index) => (
    <StyledPetPaper key={pet.id} variant="outlined">
      <ListItem
        button
        disabled={pet.type !== sitterPetPref}
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index, pet)}
      >
        <ListItemIcon>
          <Avatar alt={pet.name} src={pet.image} />
        </ListItemIcon>
        <ListItemText primary={pet.name} secondary={pet.type} />
      </ListItem>
    </StyledPetPaper>
  ));

  return (
    <Grid container justify="center" spacing={3}>
      {pets.length === 0 ? (
        <Grid item xs={12}>
          <Typography
            variant="button"
            display="block"
            align="center"
            gutterBottom
          >
            You don't have any pets!{" "}
            <Link to="/profile">Add Pets to your profile</Link>
          </Typography>
          <Container>
            <StyledImage src={PlayfulCat} />
          </Container>
        </Grid>
      ) : (
        <Grid item xs={12} sm={6}>
          <List component="nav">{petsList}</List>
        </Grid>
      )}
    </Grid>
  );
};

export default PetSelection;
