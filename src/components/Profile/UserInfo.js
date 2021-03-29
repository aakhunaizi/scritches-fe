import { makeStyles } from "@material-ui/core/styles";
import { Chip, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

const UserInfo = ({ user }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          First Name:{" "}
          <Chip
            label={user.firstName}
            clickable
            color="secondary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          Last Name:{" "}
          <Chip
            label={user.lastName}
            clickable
            color="secondary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          Email:{" "}
          <Chip
            label={user.email}
            clickable
            color="secondary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          Phone Number:{" "}
          <Chip
            label={user.phoneNumber}
            clickable
            color="secondary"
            variant="outlined"
          />
        </Grid>
      </Grid>
      {/* <form
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
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="lastName"
              required
              variant="outlined"
              inputRef={register({
                required: true,
                pattern: {
                  value: /[a-zA-Z]+/,
                },
              })}
              error={errors.lastName ? true : false}
              helperText={errors.lastName && "Last Name is required"}
              fullWidth
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="email"
              required
              variant="outlined"
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
          <Grid item xs={12} sm={6}>
            <TextField
              type="input"
              name="phoneNumber"
              required
              variant="outlined"
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
        </Grid>
      </form> */}
    </div>
  );
};

export default UserInfo;
