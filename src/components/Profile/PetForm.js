import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { Modal } from "react-bootstrap";
import { Grid, MenuItem, TextField } from "@material-ui/core";
import { StyledAddButton, StyledModal, StyledUploadButton } from "./styles";

// Actions
import { addPet, updatePet } from "../../store/actions/petActions";

// Components
import Loading from "../Loading";

const PetForm = ({ handleClose, ownerId, foundPet, show, theme, type }) => {
  const dispatch = useDispatch();

  const [pet, setPet] = useState(foundPet ?? { name: "", type: "", image: "" });
  const services = useSelector((state) => state.petReducer.petTypes);

  if (!services) return <Loading />;

  const serviceList = services.map((service) => (
    <MenuItem key={service.id} value={service.type}>
      {service.type}
    </MenuItem>
  ));

  const handleChange = (event) =>
    setPet({ ...pet, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setPet({ ...pet, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundPet) dispatch(updatePet(pet));
    else dispatch(addPet(ownerId, pet));
    setPet({ name: "", type: "", image: "" });
    handleClose();
  };

  return (
    <StyledModal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type === "add" ? "Add" : "Edit"} Pet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} noValidate>
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
                {serviceList}
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
                <StyledUploadButton
                  variant="outlined"
                  color="inherit"
                  theme={theme}
                  component="span"
                >
                  Upload Photo
                </StyledUploadButton>
              </label>
            </Grid>
            <Grid container justify="flex-end">
              <StyledAddButton
                type="submit"
                variant="outlined"
                color="inherit"
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
