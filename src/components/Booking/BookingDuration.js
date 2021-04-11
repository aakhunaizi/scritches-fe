// Styling
import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
} from "@material-ui/core";
import { StyledAvatar, StyledList, StyledTextField } from "./styles";

// Icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PetsIcon from "@material-ui/icons/Pets";
import PhoneIcon from "@material-ui/icons/Phone";

// Components
import Schedule from "../SitterPublicProfile/Schedule";

const BookingDuration = ({ booking, setBooking, sitter, theme }) => {
  sitter.schedule.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });

  const fromList = sitter.schedule.map((schedule) => (
    <MenuItem key={schedule.date} value={schedule.date}>
      {schedule.date}
    </MenuItem>
  ));

  const toList = fromList.filter(
    (schedule) => schedule.props.value >= booking.from
  );

  const handleChange = (event) =>
    setBooking({ ...booking, [event.target.name]: event.target.value });

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} sm={6}>
        <StyledList
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
              <StyledAvatar theme={theme}>
                <LocationOnIcon color={theme.palette.orange.main} />
              </StyledAvatar>
            </ListItemIcon>
            <ListItemText
              primary={sitter.city.name}
              secondary={sitter.city.country.name}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StyledAvatar theme={theme}>
                <PetsIcon />
              </StyledAvatar>
            </ListItemIcon>
            <ListItemText primary={`${sitter.petPref} Sitting`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StyledAvatar theme={theme}>
                <AttachMoneyIcon />
              </StyledAvatar>
            </ListItemIcon>
            <ListItemText primary={`${sitter.price} BHD`} secondary="per day" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StyledAvatar theme={theme}>
                <PhoneIcon />
              </StyledAvatar>
            </ListItemIcon>
            <ListItemText primary={sitter.user.phoneNumber} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StyledAvatar theme={theme}>
                <EmailIcon />
              </StyledAvatar>
            </ListItemIcon>
            <ListItemText primary={sitter.user.email} />
          </ListItem>
        </StyledList>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} sm={9}>
            <Schedule sitter={sitter} theme={theme} type="duration" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <StyledTextField
              label="From"
              name="from"
              variant="outlined"
              defaultValue={booking.from}
              onChange={handleChange}
              required
              fullWidth
              select
              style={{ marginBottom: "8%" }}
            >
              {fromList}
            </StyledTextField>
            <StyledTextField
              label="To"
              name="to"
              variant="outlined"
              defaultValue={booking.to}
              onChange={handleChange}
              required
              fullWidth
              select
            >
              {toList}
            </StyledTextField>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookingDuration;
