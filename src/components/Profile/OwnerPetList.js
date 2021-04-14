import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

// Styling
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { StyledAddButton } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";

// Components
import Loading from "../Loading";
import PetForm from "./PetForm";

// Actions
import { deletePet } from "../../store/actions/petActions";

const OwnerPetList = ({ owner, theme }) => {
  const dispatch = useDispatch();

  const pets = useSelector((state) => state.petReducer.pets);

  const [pet, setPet] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  if (!pets) return <Loading />;

  const handleShowAdd = async () => {
    setPet(null);
    setShowAdd(true);
  };
  const handleShowEdit = (pet) => {
    setPet(pet);
    setShowEdit(true);
  };

  const handleCloseAdd = () => setShowAdd(false);
  const handleCloseEdit = () => {
    setPet(null);
    setShowEdit(false);
  };

  const handleDelete = (petId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePet(petId));
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Your pet has been deleted",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    });
  };

  const petsList = pets.map((pet) => (
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
          onClick={() => handleDelete(pet.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return (
    <>
      {petsList.length === 0 ? (
        <>
          <Typography variant="h6">Add a Pet</Typography>
        </>
      ) : (
        <List>{petsList}</List>
      )}
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
    </>
  );
};

export default OwnerPetList;
