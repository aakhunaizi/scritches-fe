import { useState } from "react";

// Styling
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { StyledAddButton } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import PetForm from "./PetForm";

const OwnerPetList = ({ theme }) => {
  // States
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [pet, setPet] = useState(null);

  // Modal Handlers
  const handleShowAdd = async () => {
    setPet(null);
    setShowAdd(true);
  };
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowEdit = (pet) => {
    setPet(pet);
    setShowEdit(true);
  };
  const handleCloseEdit = () => setShowEdit(false);

  return (
    <div>
      {/* Display Pet List */}
      <List>
        <ListItem
          button
          onClick={() => handleShowEdit({ name: "Oreo", type: "Cat" })}
        >
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
        onClick={handleShowAdd}
      >
        Add
      </StyledAddButton>
      <PetForm
        handleClose={handleCloseAdd}
        show={showAdd}
        theme={theme}
        type="add"
      />
      {pet && (
        <PetForm
          handleClose={handleCloseEdit}
          foundPet={pet}
          show={showEdit}
          theme={theme}
          type="edit"
        />
      )}
    </div>
  );
};

export default OwnerPetList;
