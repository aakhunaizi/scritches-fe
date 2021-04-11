import { useSelector } from "react-redux";

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

// Components
import Loading from "../Loading";

const Sitter = ({ sitter, theme }) => {
  const services = useSelector((state) => state.petReducer.petTypes);

  if (!services) return <Loading />;

  const serviceEmoji = () => {
    const pet = services.find((item) => item.type === sitter.petPref);
    return pet.emoji;
  };

  return (
    <Grid item xs={12} sm={4} md={3} lg={2}>
      <Card>
        <StyledLink
          to={{
            pathname: `/sitters/${sitter.user.username}`,
            state: { sitter: sitter },
          }}
        >
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
                {sitter.price} BHD{" "}
                <Typography variant="caption" color="textSecondary">
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
