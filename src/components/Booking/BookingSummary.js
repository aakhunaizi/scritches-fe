import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PetsIcon from "@material-ui/icons/Pets";
import EventNoteIcon from "@material-ui/icons/EventNote";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const BookingSummary = ({ booking, owner, pet, sitter, user }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" className={classes.paper}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" className={classes.paper}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" className={classes.paper}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" className={classes.paper}>
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
                      : `${
                          (moment(booking.to) - moment(booking.from)) /
                            1000 /
                            60 /
                            60 /
                            24 +
                          1
                        } days`
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" className={classes.paper}>
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
                  primary={
                    (moment(booking.to) - moment(booking.from)) /
                      1000 /
                      60 /
                      60 /
                      24 +
                    1
                  }
                  secondary={booking.from === booking.to ? "day" : "days"}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${
                    ((moment(booking.to) - moment(booking.from)) /
                      1000 /
                      60 /
                      60 /
                      24 +
                      1) *
                    sitter.price
                  } BHD`}
                  secondary="Total Price"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookingSummary;
