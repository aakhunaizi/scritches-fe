import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// Styling
import { Grid, TextField } from "@material-ui/core";
import { StyledSaveButton, StyledUploadButton } from "./styles";

// Actions
import { updateUser } from "../../store/actions/userActions";

const UserForm = ({ profile, theme, type }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const handleOnSubmit = (data) => {
    if (data.image.length === 0) delete data.image;
    else data.image = data.image[0];
    dispatch(updateUser(data, type));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
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
            id="contained-button-file"
          />
          <label htmlFor="contained-button-file">
            <StyledUploadButton
              component="span"
              variant="outlined"
              color="inherit"
              theme={theme}
            >
              Upload Photo
            </StyledUploadButton>
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
  );
};

export default UserForm;
