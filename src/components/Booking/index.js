import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// Styling
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useTheme,
} from "@material-ui/core";
import {
  Container,
  StyledBackButton,
  StyledButton,
  StyledImage,
  StyledLink,
  useStyles,
} from "./styles";

// Assets
import BookedImage from "../../assets/Booked.png";

// Components
import BookingDuration from "./BookingDuration";
import PetSelection from "./PetSelection";
import BookingSummary from "./BookingSummary";

// Actions
import { fetchProfile } from "../../store/actions/userActions";
import { createBooking } from "../../store/actions/searchActions";

const Booking = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles();

  const steps = ["Booking Duration", "Choose a Pet", "Booking Summary"];
  const [activeStep, setActiveStep] = useState(0);
  const [pet, setPet] = useState(null);

  const sitter = useLocation().state.sitter;
  const query = useSelector((state) => state.searchReducer.query);
  const user = useSelector((state) => state.userReducer.user);
  const owner = useSelector((state) => state.userReducer.profile);

  const [booking, setBooking] = useState({
    from: query.from,
    to: query.to,
    ownerId: owner ? owner.id : "",
    sitterId: sitter ? sitter.id : "",
    petId: "",
    total: 0,
  });

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

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    console.log(booking);
    dispatch(createBooking(booking));
    setActiveStep(activeStep + 1);
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
        if (booking.ownerId === "")
          setBooking({ ...booking, ownerId: owner.id });
        if (booking.total === 0)
          setBooking({ ...booking, total: calculateDuration() * sitter.price });
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
                      <StyledLink to="/">
                        <StyledButton
                          className={classes.button}
                          variant="outlined"
                          color="inherit"
                          theme={theme}
                        >
                          Home
                        </StyledButton>
                      </StyledLink>
                      <StyledLink to="/profile">
                        <StyledButton
                          className={classes.button}
                          variant="outlined"
                          color="inherit"
                          theme={theme}
                        >
                          View Booking
                        </StyledButton>
                      </StyledLink>
                    </div>
                  </>
                ) : (
                  <>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <StyledBackButton
                          className={classes.button}
                          variant="outlined"
                          color="inherit"
                          theme={theme}
                          onClick={handleBack}
                        >
                          Back
                        </StyledBackButton>
                      )}
                      {activeStep === steps.length - 1 ? (
                        <StyledButton
                          className={classes.button}
                          variant="outlined"
                          color="inherit"
                          theme={theme}
                          onClick={handleSubmit}
                        >
                          Place Booking
                        </StyledButton>
                      ) : activeStep === 0 ? (
                        <StyledButton
                          className={classes.button}
                          variant="outlined"
                          color="inherit"
                          theme={theme}
                          disabled={booking.from === "" || booking.to === ""}
                          onClick={handleNext}
                        >
                          Next
                        </StyledButton>
                      ) : (
                        <StyledButton
                          className={classes.button}
                          variant="outlined"
                          color="inherit"
                          theme={theme}
                          disabled={!pet}
                          onClick={handleNext}
                        >
                          Next
                        </StyledButton>
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
