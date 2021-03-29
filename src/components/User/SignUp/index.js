import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

// Actions
import { signup } from "../../../store/actions/userActions";

// Styling
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FaPaw } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useTheme } from "@material-ui/core/styles";
import {
  StyledAvatar,
  StyledButton,
  StyledMdVisibility,
  StyledMdVisibilityOff,
} from "./styles";

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

export default function SignUp() {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const history = useHistory();
  const type = useLocation().state.type;

  const { register, handleSubmit, errors } = useForm();
  const [password, setPassword] = useState(true);

  const onSubmit = (data) => {
    if (type === "petSitter") {
      data.type = "petSitter";
    }
    console.log(data);
    dispatch(signup(data, history));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>Sign Up </title>
      </Helmet>
      <div className={classes.paper}>
        <StyledAvatar className={classes.avatar} theme={theme}>
          <FaPaw />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                type="text"
                name="username"
                required
                variant="outlined"
                inputRef={register({ required: true })}
                error={errors.username ? true : false}
                helperText={errors.username && "Username is required"}
                fullWidth
                label="Username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type={password ? "password" : "text"}
                name="password"
                required
                variant="outlined"
                inputRef={register({ required: true })}
                error={errors.password ? true : false}
                helperText={errors.password && "Password is required"}
                fullWidth
                label="Password"
                InputProps={{
                  endAdornment: password ? (
                    <StyledMdVisibility
                      onClick={() => setPassword(!password)}
                    />
                  ) : (
                    <StyledMdVisibilityOff
                      onClick={() => setPassword(!password)}
                    />
                  ),
                }}
              />
            </Grid>
          </Grid>
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            theme={theme}
          >
            Sign Up
          </StyledButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
