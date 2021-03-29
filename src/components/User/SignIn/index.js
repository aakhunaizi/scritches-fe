import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// Actions
import { signin } from "../../../store/actions/userActions";

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

export default function SignIn() {
  const classes = useStyles();
  const theme = useTheme();
  const { register, handleSubmit, errors } = useForm();
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(signin(data, history));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>Sign In </title>
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
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
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
                autoFocus
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
            Sign in
          </StyledButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signup" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
