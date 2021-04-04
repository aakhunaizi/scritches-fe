import { useState } from "react";

// Styling
import { Grid, Typography } from "@material-ui/core";
import { StyledEditButtonMargin, StyledModal } from "./styles";
import { Modal } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { StyledSaveButton } from "./styles";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/actions/userActions";
import { StyledProfileImage } from "./styles";

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
}));

const UserInfo = ({ profile, theme, user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  const handleOnSubmit = (data) => {
    if (data.image.length === 0) delete data.image;
    else data.image = data.image[0];
    dispatch(updateUser(data));
  };

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
          <form
            className={classes.form}
            onSubmit={handleSubmit(handleOnSubmit)}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  type="text"
                  name="firstName"
                  variant="outlined"
                  defaultValue={profile.user.firstName}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && "First Name is required"}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /[a-zA-Z]+/,
                    },
                  })}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  variant="outlined"
                  defaultValue={profile.user.lastName}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && "Last Name is required"}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /[a-zA-Z]+/,
                    },
                  })}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  variant="outlined"
                  defaultValue={profile.user.email}
                  error={errors.email ? true : false}
                  helperText={errors.email && "Email is required"}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  type="input"
                  name="phoneNumber"
                  variant="outlined"
                  defaultValue={profile.user.phoneNumber}
                  error={errors.phoneNumber ? true : false}
                  helperText={errors.phoneNumber && "Phone Number is required"}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^([0-9]\d*)$/,
                    },
                  })}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  name="image"
                  style={{ display: "none" }}
                  ref={register}
                />
                <label>
                  <StyledSaveButton
                    variant="outlined"
                    color="inherit"
                    theme={theme}
                  >
                    Upload Photo
                  </StyledSaveButton>
                </label>
              </Grid>
              <Grid container justify="flex-end">
                <StyledSaveButton
                  type="submit"
                  variant="outlined"
                  color="inherit"
                  theme={theme}
                >
                  Save
                </StyledSaveButton>
              </Grid>
            </Grid>
          </form>
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default UserInfo;
