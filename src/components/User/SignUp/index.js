//React Imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

//Actions

//Components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FaPaw } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FaPaw />
        </Avatar>
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
                inputRef={register({ required: true })}
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
                inputRef={register({ required: true })}
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
                inputRef={register({ required: true })}
                error={errors.email ? true : false}
                helperText={errors.email && "Email is required"}
                fullWidth
                label="Email"
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
                type="password"
                name="password"
                required
                variant="outlined"
                inputRef={register({ required: true })}
                error={errors.password ? true : false}
                helperText={errors.password && "Password is required"}
                fullWidth
                label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="input"
                name="phoneNumber"
                required
                variant="outlined"
                inputRef={register({ required: true })}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber && "Phone Number is required"}
                fullWidth
                label="Phone Number"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link to="/#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
