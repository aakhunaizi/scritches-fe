import { useState } from "react";

// Styling
import { Modal } from "react-bootstrap";
import { Grid, Typography } from "@material-ui/core";
import {
  StyledEditButtonMargin,
  StyledModal,
  StyledProfileImage,
} from "./styles";

// Components
import UserForm from "./UserForm";

const UserInfo = ({ profile, theme, user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StyledProfileImage
        src={
          profile.user.image ??
          "http://localhost:8000/media/1617175202259-default_profile_pic.jpg"
        }
        fluid
        roundedCircle
        theme={theme}
      />
      <Typography variant="h6">@{user.username}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">First Name</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.firstName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Last Name</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Email</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Phone Number</Typography>
          <Typography variant="h5" component="h2">
            {profile.user.phoneNumber}
          </Typography>
        </Grid>
      </Grid>
      <StyledEditButtonMargin
        variant="outlined"
        color="inherit"
        theme={theme}
        onClick={handleShow}
      >
        Edit
      </StyledEditButtonMargin>

      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm profile={profile} theme={theme} />
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default UserInfo;
