// Styling
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { StyledPaper } from "./styles";

// Icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PetsIcon from "@material-ui/icons/Pets";

const BookingSummary = ({
  booking,
  calculateDuration,
  owner,
  pet,
  sitter,
  user,
}) => {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} sm={6}>
        <StyledPaper variant="outlined">
          <Typography
            variant="button"
            display="block"
            gutterBottom
            align="center"
          >
            Pet Sitter
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar alt={sitter.user.username} src={sitter.user.image} />
              </ListItemIcon>
              <ListItemText
                primary={`${sitter.user.firstName} ${sitter.user.lastName}`}
                secondary={`@${sitter.user.username}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={sitter.user.phoneNumber}
                secondary={sitter.user.email}
              />
            </ListItem>
          </List>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledPaper variant="outlined">
          <Typography
            variant="button"
            display="block"
            gutterBottom
            align="center"
          >
            Pet Owner
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar alt={owner.user.username} src={owner.user.image} />
              </ListItemIcon>
              <ListItemText
                primary={`${owner.user.firstName} ${owner.user.lastName}`}
                secondary={`@${user.username}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={owner.user.phoneNumber}
                secondary={owner.user.email}
              />
            </ListItem>
          </List>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledPaper variant="outlined">
          <Typography
            variant="button"
            display="block"
            gutterBottom
            align="center"
          >
            Pet
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar alt={pet.name} src={pet.image} />
              </ListItemIcon>
              <ListItemText primary={pet.name} secondary={pet.type} />
            </ListItem>
          </List>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledPaper variant="outlined">
          <Typography
            variant="button"
            display="block"
            gutterBottom
            align="center"
          >
            Booking Duration
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  booking.from === booking.to
                    ? `${booking.from}`
                    : `${booking.from} to ${booking.to}`
                }
                secondary={
                  booking.from === booking.to
                    ? "1 day"
                    : `${calculateDuration()} days`
                }
              />
            </ListItem>
          </List>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={12}>
        <StyledPaper variant="outlined">
          <List>
            <ListItem>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${sitter.price} BHD`}
                secondary="per day"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText
                primary={calculateDuration()}
                secondary={booking.from === booking.to ? "day" : "days"}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${calculateDuration() * sitter.price} BHD`}
                secondary="Total Price"
              />
            </ListItem>
          </List>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default BookingSummary;
