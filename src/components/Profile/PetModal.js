import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const PetModal = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [pet, setPet] = useState({
    name: "",
    type: "",
    image: "",
  });

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <AiOutlinePlusCircle
        size="2em"
        style={{ marginLeft: 430 }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} style={{ marginTop: 150 }}>
        <Modal.Header closeButton>
          <Modal.Title>Add a pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control type="name" placeholder="Enter a name" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Pet Type</Form.Label>
              <Form.Control as="select">
                <option>Cat</option>
                <option>Dog</option>
                <option>Fish</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Pet Image" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PetModal;
