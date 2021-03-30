import { useHistory } from "react-router-dom";
import { useState } from "react";

// Styling

import { Form, Modal } from "react-bootstrap";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { StyledAddButton, StyledModal } from "./styles";

const OwnerPetList = ({ theme }) => {
  const history = useHistory();

  // States
  const [show, setShow] = useState(false);
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

  // Modal Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter a name"
                name="name"
                value={pet.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Pet Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={pet.type}
                onChange={handleChange}
              >
                <option>Cat</option>
                <option>Dog</option>
                <option>Fish</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Pet Image"
                name="image"
                type="file"
                onChange={handleImage}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <StyledAddButton variant="outlined" color="inherit" theme={theme}>
            Add
          </StyledAddButton>
        </Modal.Footer>
      </StyledModal>
      {/* Display Pet List */}
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Pet image"
              src="https://img.favpng.com/13/0/13/cat-computer-icons-user-profile-avatar-png-favpng-0aXfSAjB7FwDVpeuUDXvWRLzd.jpg"
            />
          </ListItemAvatar>
          <ListItemText primary="Oreo" secondary="Cat" />
        </ListItem>
      </List>
      <StyledAddButton
        variant="outlined"
        color="inherit"
        theme={theme}
        onClick={handleShow}
      >
        Add
      </StyledAddButton>
    </div>
  );
};

export default OwnerPetList;
