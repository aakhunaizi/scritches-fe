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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserInfo = ({ user, theme }) => {
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
    data.id = user.id;
    if (data.image.length === 0) {
      delete data.image;
    } else {
      data.image = data.image[0];
    }
    dispatch(updateUser(data));
  };

  return (
    <>
      <StyledProfileImage
        src={
          user.image ??
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
            {user.firstName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Last Name</Typography>
          <Typography variant="h5" component="h2">
            {user.lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Email</Typography>
          <Typography variant="h5" component="h2">
            {user.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Phone Number</Typography>
          <Typography variant="h5" component="h2">
            {user.phoneNumber}
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
      {/* Edit  */}
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
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
                  type="text"
                  name="firstName"
                  required
                  variant="outlined"
                  defaultValue={user.firstName}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /[a-zA-Z]+/,
                    },
                  })}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && "First Name is required"}
                  fullWidth
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="lastName"
                  required
                  variant="outlined"
                  defaultValue={user.lastName}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /[a-zA-Z]+/,
                    },
                  })}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && "Last Name is required"}
                  fullWidth
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="email"
                  required
                  variant="outlined"
                  defaultValue={user.email}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  error={errors.email ? true : false}
                  helperText={errors.email && "Email is required"}
                  fullWidth
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="input"
                  name="phoneNumber"
                  required
                  variant="outlined"
                  defaultValue={user.phoneNumber}
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^([0-9]\d*)$/,
                    },
                  })}
                  error={errors.phoneNumber ? true : false}
                  helperText={errors.phoneNumber && "Phone Number is required"}
                  fullWidth
                  label="Phone Number"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="image"
                  ref={register}
                  id="contained-button-file"
                />
                <label htmlFor="contained-button-file">
                  <StyledSaveButton
                    variant="outlined"
                    color="inherit"
                    theme={theme}
                    component="span"
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
    </>
  );
};

export default UserInfo;
