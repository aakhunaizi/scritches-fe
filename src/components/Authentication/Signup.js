import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

// Styling
import { useTheme } from "@material-ui/core/styles";
import { Container, Grid, TextField, Typography } from "@material-ui/core";
import { FaPaw } from "react-icons/fa";
import {
  StyledAvatar,
  StyledButton,
  StyledMdVisibility,
  StyledMdVisibilityOff,
} from "./styles";

// Actions
import { signup } from "../../store/actions/userActions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const { register, handleSubmit, errors } = useForm();

  const type = useLocation().state.type;
  const [password, setPassword] = useState(true);

  const handleOnSubmit = (data) => {
    if (type === "petSitter") data.type = "petSitter";
    dispatch(signup(data, history));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <div>
        <StyledAvatar theme={theme}>
          <FaPaw />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                type="text"
                name="firstName"
                variant="outlined"
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
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                variant="outlined"
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
              <TextField
                label="Username"
                type="text"
                name="username"
                variant="outlined"
                error={errors.username ? true : false}
                helperText={errors.username && "Username is required"}
                inputRef={register({ required: true })}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={password ? "password" : "text"}
                name="password"
                variant="outlined"
                error={errors.password ? true : false}
                helperText={errors.password && "Password is required"}
                inputRef={register({ required: true })}
                required
                fullWidth
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
            variant="contained"
            fullWidth
            theme={theme}
          >
            Sign up
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
};

export default Signup;
