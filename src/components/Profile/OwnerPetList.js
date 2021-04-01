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
import { deletePet } from "../../store/actions/petActions";
import { useDispatch, useSelector } from "react-redux";

const OwnerPetList = ({ owner, theme }) => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.petReducer.pets);
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
        {pets &&
          pets.map((pet) => (
            <ListItem key={pet.id} button onClick={() => handleShowEdit(pet)}>
              <ListItemAvatar>
                <Avatar
                  alt="Pet image"
                  src={
                    pet.image ??
                    "http://localhost:8000/media/1617263689195-placeholder.png"
                  }
                />
              </ListItemAvatar>
              <ListItemText primary={pet.name} secondary={pet.type} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(deletePet(pet.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
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
        ownerId={owner.id}
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
