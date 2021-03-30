import { useHistory } from "react-router-dom";
import { useState } from "react";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Button, Form, Modal } from "react-bootstrap";
import { Avatar, Chip, Grid } from "@material-ui/core";

// Theme
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const OwnerPetList = () => {
  const classes = useStyles();

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
    <div className={classes.large}>
      {/* Add Button */}
      <AddIcon size="3em" onClick={handleShow} style={{ float: "left" }} />

      {/* Modal */}
      <Modal show={show} onHide={handleClose} style={{ marginTop: 150 }}>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Display Pet List */}
      <div style={{ marginRight: 200 }}>
        <Avatar
          alt="Pet image"
          src="https://img.favpng.com/13/0/13/cat-computer-icons-user-profile-avatar-png-favpng-0aXfSAjB7FwDVpeuUDXvWRLzd.jpg"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            Pet Name: {pet.name}
          </Grid>
          <Grid item xs={12} sm={6}>
            Pet Type: {pet.type}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OwnerPetList;
