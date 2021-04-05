import { useState } from "react";

// Styling
import { Modal } from "react-bootstrap";
import { Grid, Typography } from "@material-ui/core";
import {
  StyledDivider,
  StyledEditButtonMargin,
  StyledModal,
  StyledTypography,
} from "./styles";

// Components
import SitterForm from "./SitterForm";

const SitterData = ({ theme, sitter, userId }) => {
  const [show, setShow] = useState(false);

  const [sitterData, setSitterData] = useState({
    id: sitter.id,
    bio: sitter.bio ?? "",
    petPref: sitter.petPref ?? "",
    price: sitter.price ?? "",
    userId,
    cityId: sitter.city ? sitter.city.id : null,
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="textSecondary">Location</Typography>
          {sitter.city ? (
            <Typography variant="h6" component="h2">
              {sitter.city.name}, {sitter.city.country.name}
            </Typography>
          ) : (
            <Typography variant="caption" component="h2">
              Where do you live?
            </Typography>
          )}
          <StyledDivider />
          <Typography color="textSecondary">Bio</Typography>
          {sitter.bio ? (
            <StyledTypography variant="h6" component="h2">
              {sitter.bio}
            </StyledTypography>
          ) : (
            <Typography variant="caption">Tell us about yourself</Typography>
          )}
          <StyledDivider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Service</Typography>
          {sitter.petPref ? (
            <Typography variant="h5" component="h2">
              {sitter.petPref} Sitting
            </Typography>
          ) : (
            <Typography variant="caption">
              What service do you provide?
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Price</Typography>
          {sitter.price !== 0 ? (
            <Typography variant="h5" component="h2">
              {sitter.price} BHD{" "}
              <Typography variant="caption">/ day</Typography>
            </Typography>
          ) : (
            <Typography variant="caption">Specify your price</Typography>
          )}
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
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SitterForm
            handleClose={handleClose}
            sitter={sitter}
            setSitterData={setSitterData}
            sitterData={sitterData}
            theme={theme}
          />
        </Modal.Body>
      </StyledModal>
    </div>
  );
};

export default SitterData;
