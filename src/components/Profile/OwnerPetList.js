import { useState } from "react";

// Styling

import { Modal } from "react-bootstrap";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { StyledAddButton, StyledModal } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import PetForm from "./PetForm";

const OwnerPetList = ({ theme }) => {
  // States
  const [show, setShow] = useState(false);
  const [type, setType] = useState("add");
  // Modal Handlers
  const handleClose = () => setShowAdd(false);
  const handleShow = () => setShowAdd(true);

  return (
    <div>
      {/* Display Pet List */}
      <List>
        <ListItem button onClick={handleShow}>
          <ListItemAvatar>
            <Avatar
              alt="Pet image"
              src="https://img.favpng.com/13/0/13/cat-computer-icons-user-profile-avatar-png-favpng-0aXfSAjB7FwDVpeuUDXvWRLzd.jpg"
            />
          </ListItemAvatar>
          <ListItemText primary="Oreo" secondary="Cat" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
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
      <PetForm />
    </div>
  );
};

export default OwnerPetList;
