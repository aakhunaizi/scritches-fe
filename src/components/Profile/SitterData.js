import { useState } from "react";
import { useDispatch } from "react-redux";

// Styling
import { Grid, Typography } from "@material-ui/core";
import { StyledDivider, StyledSaveButton } from "./styles";
import { StyledEditButtonMargin } from "./styles";
import { Modal } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { StyledModal, StyledProfileImage } from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SitterData = ({ theme, sitter }) => {
  const dispatch = useDispatch();

  // States
  const [show, setShow] = useState(false);

  // Modal Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Form
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const onSubmit = (data) => {
    // dispatch(updateSitter);
    console.log(data);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="textSecondary">Location</Typography>
          <Typography variant="h6" component="h2">
            {sitter.city.name}, {sitter.city.country.name}
          </Typography>
          <StyledDivider />
          <Typography color="textSecondary">Bio</Typography>
          <Typography
            style={{ wordWrap: "break-word" }}
            variant="h6"
            component="h2"
          >
            {sitter.bio}
            <StyledDivider />
          </Typography>
        </Grid>
        {/* Display Pet Preferences */}
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Pet Preference</Typography>
          <Typography variant="h5" component="h2">
            {sitter.petRef}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Price</Typography>
          <Typography variant="h5" component="h2">
            {sitter.price}
          </Typography>
        </Grid>
      </Grid>

      {/* Edit Button */}
      <StyledEditButtonMargin
        variant="outlined"
        color="inherit"
        theme={theme}
        onClick={handleShow}
      >
        Edit
      </StyledEditButtonMargin>

      {/* Edit Modal */}
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Location / Bio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Country"
                  variant="outlined"
                  name="country"
                  defaultValue={sitter.city.country.name}
                  fullWidth
                  select
                >
                  <MenuItem value="Bahrain">Bahrain</MenuItem>
                </TextField>
                {/* <Select
                  fullWidth
                  defaultValue={sitter.city.country.name}
                  name="country"
                  ref={register}
                >
                  <MenuItem value="Bahrain">Bahrain</MenuItem>
                </Select> */}
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <InputLabel>City</InputLabel>
                <Select
                  fullWidth
                  defaultValue={sitter.city.name}
                  name="city"
                  ref={register}
                >
                  <MenuItem value="Saar">Saar</MenuItem>
                  <MenuItem value="Manama">Manama</MenuItem>
                </Select>
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <InputLabel>Pet Preference</InputLabel>
                <Select
                  fullWidth
                  defaultValue={sitter.petRef}
                  name="city"
                  inputRef={register}
                >
                  <MenuItem value="Cat">Cat</MenuItem>
                  <MenuItem value="Dog">Dog</MenuItem>
                </Select>
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="bio"
                  defaultValue={sitter.bio}
                  inputRef={register}
                  fullWidth
                />
              </Grid>

              <Grid container justify="flex-end">
                <StyledSaveButton
                  type="submit"
                  variant="outlined"
                  color="inherit"
                  className={classes.submit}
                  theme={theme}
                >
                  Save
                </StyledSaveButton>
              </Grid>
            </Grid>
          </form>
        </Modal.Body>
      </StyledModal>
    </div>
  );
};

export default SitterData;
