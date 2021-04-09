import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  makeStyles,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useLocation } from "react-router";
import { fetchProfile } from "../../store/actions/userActions";
import { createBooking } from "../../store/actions/searchActions";
import BookingDuration from "./BookingDuration";
import PetSelection from "./PetSelection";
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";
import { Container, StyledImage } from "./styles";

import BookedImage from "../../assets/Booked.png";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: theme.spacing(10),
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  icon: {
    color: "#87BCDE",
    "&$activeIcon": {
      color: "#26658C",
    },
    "&$completedIcon": {
      color: "#EB5E28",
    },
  },
  activeIcon: {},
  completedIcon: {},
}));

const Booking = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Booking Duration", "Choose a Pet", "Booking Summary"];

  const sitter = useLocation().state.sitter;
  const user = useSelector((state) => state.userReducer.user);
  const owner = useSelector((state) => state.userReducer.profile);

  const query = useSelector((state) => state.searchReducer.query);

  const [pet, setPet] = useState(null);
  console.log("🚀 ~ pet", pet);
  const [booking, setBooking] = useState({
    from: query.from,
    to: query.to,
    ownerId: owner ? owner.id : "",
    sitterId: sitter ? sitter.id : "",
    petId: "",
    total: 0,
  });
  console.log("🚀 ~ booking", booking);

  useEffect(() => {
    if (user?.type === "petOwner") {
      dispatch(fetchProfile(user.type));
    }
  }, [user, dispatch]);

  const calculateDuration = () =>
    (moment(booking.to) - moment(booking.from)) / 86400000 + 1;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = () => {
    console.log(booking);
    dispatch(createBooking(booking));
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BookingDuration
            booking={booking}
            setBooking={setBooking}
            sitter={sitter}
            theme={theme}
          />
        );
      case 1:
        return (
          <PetSelection
            booking={booking}
            setBooking={setBooking}
            pet={pet}
            setPet={setPet}
            sitterPetPref={sitter.petPref}
          />
        );
      case 2:
        if (booking.ownerId === "" || booking.total === 0)
          setBooking({
            ...booking,
            ownerId: owner.id,
            total: calculateDuration() * sitter.price,
          });
        return (
          <BookingSummary
            booking={booking}
            calculateDuration={calculateDuration}
            owner={owner}
            pet={pet}
            sitter={sitter}
            user={user}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <div className={classes.root}>
      {user ? (
        <>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Stepper
                className={classes.stepper}
                activeStep={activeStep}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconProps={{
                        classes: {
                          root: classes.icon,
                          active: classes.activeIcon,
                          completed: classes.completedIcon,
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <>
                {activeStep === steps.length ? (
                  <>
                    <Typography variant="h5" align="center" gutterBottom>
                      Successfully Booked!
                    </Typography>
                    <Typography align="center" variant="subtitle1">
                      You can view your booking details in your profile at any
                      time.
                    </Typography>
                    <Container>
                      <StyledImage src={BookedImage} />
                    </Container>
                    <div className={classes.buttons}>
                      <Link to="/">
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.button}
                        >
                          Home
                        </Button>
                      </Link>
                      <Link to="/profile">
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.button}
                        >
                          View Booking
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          variant="outlined"
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      {activeStep === steps.length - 1 ? (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleSubmit}
                          className={classes.button}
                        >
                          Place Booking
                        </Button>
                      ) : activeStep === 0 ? (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                          disabled={booking.from === "" || booking.to === ""}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                          disabled={!pet}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </>
            </Paper>
          </main>
        </>
      ) : (
        <Paper className={classes.paper}>
          <Typography component="h2" variant="h5" align="center">
            You have to Sign in to complete the booking process
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Booking;
