import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import { Grid, Typography } from "@material-ui/core";
import { StyledDivider, StyledSaveButton } from "./styles";
import { StyledEditButtonMargin } from "./styles";
import { Modal } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { StyledModal } from "./styles";
import MenuItem from "@material-ui/core/MenuItem";

// Actions
import { updateSitter } from "../../store/actions/sitterActions";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SitterData = ({ theme, sitter, userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // States
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(
    sitter.city ? sitter.city.country.id : null
  );
  const [sitterData, setSitterData] = useState({
    id: sitter.id,
    bio: sitter.bio,
    petRef: sitter.petRef,
    price: sitter.price,
    userId,
    cityId: sitter.city ? sitter.city.id : null,
  });

  const countries = useSelector((state) => state.locationReducer.countries);
  const _country = countries.find((_country) => _country.id === country);
  const cities = _country ? _country.cities : null;

  // Modal Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Form
  const handleChange = (event) =>
    setSitterData({ ...sitterData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("updated sitter", sitterData);
    dispatch(updateSitter(sitterData));
    handleClose();
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="textSecondary">Location</Typography>
          {sitter.city ? (
            <Typography variant="h6" component="h2">
              {sitter.city.name}, {sitter.city.country.name}
            </Typography>
          ) : (
            <Typography variant="caption" component="h2">
              Where do you live?
            </Typography>
          )}
          <StyledDivider />
          <Typography color="textSecondary">Bio</Typography>
          {sitter.bio ? (
            <Typography
              style={{ wordWrap: "break-word" }}
              variant="h6"
              component="h2"
            >
              {sitter.bio}
            </Typography>
          ) : (
            <Typography variant="caption">Tell us about yourself</Typography>
          )}
          <StyledDivider />
        </Grid>
        {/* Display Pet Preferences */}
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Service</Typography>
          {sitter.petRef ? (
            <Typography variant="h5" component="h2">
              {sitter.petRef}
            </Typography>
          ) : (
            <Typography variant="caption">
              What service do you provide?
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography color="textSecondary">Price</Typography>
          {sitter.price !== 0 ? (
            <Typography variant="h5" component="h2">
              {sitter.price} BHD{" "}
              <Typography variant="caption">/ day</Typography>
            </Typography>
          ) : (
            <Typography variant="caption">Specify your price</Typography>
          )}
        </Grid>
      </Grid>

      {/* Edit Button */}
      <StyledEditButtonMargin
        variant="outlined"
        color="inherit"
        theme={theme}
        onClick={handleShow}
      >
        Edit
      </StyledEditButtonMargin>

      {/* Edit Modal */}
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              {/* Edit Country */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Country"
                  variant="outlined"
                  defaultValue={sitter.city ? sitter.city.country.id : 0}
                  onChange={(event) => setCountry(event.target.value)}
                  fullWidth
                  select
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  variant="outlined"
                  name="cityId"
                  defaultValue={sitter.city ? sitter.city.id : 0}
                  onChange={handleChange}
                  fullWidth
                  select
                >
                  {cities &&
                    cities.map((city) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.name}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  variant="outlined"
                  name="bio"
                  defaultValue={sitter.bio}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Service"
                  variant="outlined"
                  name="petRef"
                  defaultValue={sitter.petRef}
                  onChange={handleChange}
                  fullWidth
                  select
                >
                  <MenuItem value="Cat Sitting">Cat Sitting</MenuItem>
                  <MenuItem value="Dog Sitting">Dog Sitting</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Price"
                  variant="outlined"
                  name="price"
                  type="number"
                  defaultValue={sitter.price}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </Grid>

              {/* Save Button */}
              <Grid container justify="flex-end">
                <StyledSaveButton
                  type="submit"
                  variant="outlined"
                  color="inherit"
                  className={classes.submit}
                  theme={theme}
                >
                  Save
                </StyledSaveButton>
              </Grid>
            </Grid>
          </form>
        </Modal.Body>
      </StyledModal>
    </div>
  );
};

export default SitterData;
