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

const PetForm = ({ handleClose, foundPet, show, theme, type }) => {
  const classes = useStyles();

  const [pet, setPet] = useState(foundPet ?? { name: "", type: "", image: "" });
  console.log("🚀 ~ file: PetForm.js ~ line 26 ~ PetForm ~ pet", pet);

  // Component Handlers
  const handleChange = (event) =>
    setPet({ ...pet, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setPet({ ...pet, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (foundPet) dispatch(updatePet(pet));
    // else dispatch(addPet(pet));
    setPet({ name: "", type: "", image: "" });
    handleClose();
  };
  return (
    <StyledModal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type === "add" ? "Add" : "Edit"} Pet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                defaultValue={pet.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Type"
                variant="outlined"
                name="type"
                defaultValue={pet.type}
                onChange={handleChange}
                fullWidth
                required
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
                disabled={
                  pet.name === "" || pet.type === "" || pet.image === ""
                }
              >
                {type === "add" ? "Add" : "Save"}
              </StyledAddButton>
            </Grid>
          </Grid>
        </form>
      </Modal.Body>
    </StyledModal>
  );
};

export default PetForm;
