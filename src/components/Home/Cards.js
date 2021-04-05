// Styling
import { CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { Container, StyledGrid, StyledCard, StyledTypography } from "./styles";

// Assests
import SelectImage from "../../assets/Select.png";
import LocationImage from "../../assets/Location.png";
import DatesImage from "../../assets/Dates.png";
import BookImage from "../../assets/Book.png";

const Cards = () => {
  return (
    <Container>
      <StyledTypography gutterBottom variant="h5" component="h2">
        Pet sitting made easy
      </StyledTypography>
      <Grid container spacing={3} justify="center" alignItems="stretch">
        <StyledGrid item xs={12} sm={3} md={2}>
          <StyledCard>
            <CardMedia component="img" src={LocationImage} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Step 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Select your preferred location.
              </Typography>
            </CardContent>
          </StyledCard>
        </StyledGrid>
        <StyledGrid item xs={12} sm={3} md={2}>
          <StyledCard>
            <CardMedia component="img" src={SelectImage} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Step 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Select your preferred service.
              </Typography>
              <br />
            </CardContent>
          </StyledCard>
        </StyledGrid>
        <StyledGrid item xs={12} sm={3} md={2}>
          <StyledCard>
            <CardMedia component="img" src={DatesImage} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Step 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Select your desired start/end dates.
              </Typography>
            </CardContent>
          </StyledCard>
        </StyledGrid>
        <StyledGrid item xs={12} sm={3} md={2}>
          <StyledCard>
            <CardMedia component="img" src={BookImage} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Step 4
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Choose a pet sitter, book, and pay securely through Scritches.
              </Typography>
            </CardContent>
          </StyledCard>
        </StyledGrid>
      </Grid>
    </Container>
  );
};

export default Cards;
