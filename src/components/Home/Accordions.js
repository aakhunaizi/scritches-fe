import { Link } from "react-router-dom";

// Styling
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container, StyledTypography, AccordionContainer } from "./styles";

const Accordions = () => {
  return (
    <Container>
      <StyledTypography gutterBottom variant="h5" component="h2">
        Frequently Asked Questions
      </StyledTypography>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <AccordionContainer>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is Scritches?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In today’s world, life is hectic for many pet owners. With
                  commitments at work, time out with friends and family, or even
                  well-deserved vacations, it is not always possible to provide
                  our pets the amount of attention they deserve. Scritches helps
                  in connecting you with other pet lovers who are excited to
                  help you, take care of your pets like it were part of their
                  family, belly rubs and hugs included.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>How can I ensure my pet's safety?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our sitters have to pass a background check before they are
                  allowed onto the platform. They are normal people who love
                  pets, just like you. They are dedicated to giving your pet a
                  home where they can freely roam and explore, adding up to a
                  day worth barking or meowing about.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Is Scritches for free?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Signing up and booking pet sitters with Scritches is
                  completely free.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>How can I become a pet sitter?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Signing up as a Scritches pet sitter is as easy as ever - and
                  it's free! Once your profile is completed and approved, you
                  can start receiving requests!
                  <Link
                    to={{ pathname: "/signup", state: { type: "petSitter" } }}
                  >
                    {""} {""} Apply here
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography>What is the Scritches service fee?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Scritches was developed to connect pet owners with pet lovers
                  that are dedicated to caring for their pets when they are busy
                  or away through a secure platform. The service fee, a
                  percentage of the service booking, helps us cover costs such
                  as development, marketing, and payment processing of our pet
                  sitters' earnings.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Accordions;
