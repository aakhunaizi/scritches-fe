import { useHistory } from "react-router-dom";
import { useState } from "react";

// Styling
import { Modal } from "react-bootstrap";
import { Grid, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { StyledAddButton, StyledModal, StyledSaveButton } from "./styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PetForm = (handleClose, show) => {
  const history = useHistory();
  const classes = useStyles();

  const [pet, setPet] = useState({
    name: "",
    type: "",
    image: "",
  });
  // Component Handlers
  const handleChange = (event) =>
    setPet({ ...pet, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setPet({ ...pet, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (foundPet) dispatch(updatePet(pet));
    // else dispatch(addPet(pet));
    history.push("/profile");
  };
  return (
    <StyledModal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Pet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                defaultValue={pet.name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Type"
                variant="outlined"
                defaultValue={pet.type}
                onChange={handleChange}
                fullWidth
                select
              >
                <MenuItem key={pet.type} value="Cat">
                  Cat
                </MenuItem>
                <MenuItem key={pet.type} value="Dog">
                  Dog
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <input
                style={{ display: "none" }}
                type="file"
                name="image"
                onChange={handleImage}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <StyledSaveButton
                  variant="outlined"
                  color="inherit"
                  theme={theme}
                  component="span"
                >
                  Upload Photo
                </StyledSaveButton>
              </label>
            </Grid>
            <Grid container justify="flex-end">
              <StyledAddButton
                type="submit"
                variant="outlined"
                color="inherit"
                className={classes.submit}
                theme={theme}
              >
                Save
              </StyledAddButton>
            </Grid>
          </Grid>
        </form>
      </Modal.Body>
    </StyledModal>
  );
};

export default PetForm;
