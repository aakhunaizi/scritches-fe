import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PetsIcon from "@material-ui/icons/Pets";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Avatar, Grid, MenuItem, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const BookingDuration = ({ query, sitter }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} sm={6}>
        <List
          className={classes.root}
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Pet Sitter Info
            </ListSubheader>
          }
        >
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
            <ListItemIcon>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={sitter.city.name}
              secondary={sitter.city.country.name}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar>
                <PetsIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={`${sitter.petPref} Sitting`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar>
                <AttachMoneyIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={`${sitter.price} BHD`} secondary="per day" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar>
                <PhoneIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={sitter.user.phoneNumber} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={sitter.user.email} />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            name="country"
            variant="outlined"
            defaultValue={query.country}
            //   onChange={handleChange}
            required
            fullWidth
            select
          >
            <MenuItem value={"1"}>{"1"}</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookingDuration;
