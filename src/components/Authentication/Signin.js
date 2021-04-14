import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

// Styling
import {
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { FaPaw } from "react-icons/fa";
import {
  StyledAvatar,
  StyledButton,
  StyledMdVisibility,
  StyledMdVisibilityOff,
  useStyles,
} from "./styles";

// Actions
import { signin } from "../../store/actions/userActions";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const [password, setPassword] = useState(true);
  const lastLocation = useSelector(
    (state) => state.locationReducer.lastLocation
  );

  const handleOnSubmit = (data) =>
    dispatch(signin(data, history, lastLocation));

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <div className={classes.paper}>
        <StyledAvatar className={classes.avatar} theme={theme}>
          <FaPaw />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleOnSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                type="text"
                variant="outlined"
                error={errors.username ? true : false}
                helperText={errors.username && "Username is required"}
                inputRef={register({ required: true })}
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type={password ? "password" : "text"}
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
            className={classes.submit}
            type="submit"
            variant="contained"
            fullWidth
            theme={theme}
          >
            Sign in
          </StyledButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                to={{ pathname: "/signup", state: { type: "petOwner" } }}
                variant="body2"
              >
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signin;
