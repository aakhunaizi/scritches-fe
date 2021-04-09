// Styling
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { StyledBookButton, StyledProfileImage, StyledLink } from "./styles";

// Icons
import { GiCat, GiEgyptianBird, GiSittingDog } from "react-icons/gi";

const Sitter = ({ sitter, theme }) => {
  const serviceEmoji = () => {
    if (sitter.petPref === "Cat") return <GiCat />;
    else if (sitter.petPref === "Dog") return <GiSittingDog />;
    else if (sitter.petPref === "Bird") return <GiEgyptianBird />;
  };

  return (
    <Grid item xs={12} sm={4} md={3} lg={2}>
      <Card>
        <StyledLink to={`/sitters/${sitter.user.username}`}>
          <CardActionArea>
            <StyledProfileImage
              src={
                sitter.user.image ??
                "http://localhost:8000/media/1617175202259-default_profile_pic.jpg"
              }
              fluid
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {sitter.user.firstName} {sitter.user.lastName}
              </Typography>
              <Typography gutterBottom variant="h6" color="textSecondary">
                {sitter.city.name}, {sitter.city.country.name}
              </Typography>
              <Typography gutterBottom variant="h4">
                {serviceEmoji()}
              </Typography>
              <Typography variant="h6" component="p">
                {sitter.price} BHD
                <Typography variant="caption" color="textSecondary">
                  {" "}
                  (per day)
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledLink>
        <CardActions>
          <StyledLink to={{ pathname: "/booking", state: { sitter: sitter } }}>
            <StyledBookButton variant="outlined" color="inherit" theme={theme}>
              Book
            </StyledBookButton>
          </StyledLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Sitter;
