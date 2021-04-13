import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styling
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Modal } from "react-bootstrap";
import {
  StyledCancelButton,
  StyledModal,
  StyledSaveStatusButton,
  StyledStatus,
  StyledStatusButton,
} from "./styles";

// Components
import Loading from "../Loading";

// Actions
import { updateBooking } from "../../store/actions/bookingActions";

const BookingData = ({ theme }) => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookingReducer.bookings);

  const [show, setShow] = useState(false);
  const [booking, setBooking] = useState(null);

  if (!bookings) return <Loading />;

  const handleShow = (booking) => {
    setBooking({ id: booking.id, status: booking.status });
    setShow(true);
  };

  const handleClose = () => {
    setBooking(null);
    setShow(false);
  };

  const handleChange = (event) => {
    setBooking({ ...booking, status: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(updateBooking(booking.id, booking.status));
    handleClose();
  };

  const statusColor = (bookingStatus) => {
    switch (bookingStatus) {
      case "Pending":
        return theme.palette.darkGrey.light;
      case "Confirmed":
        return theme.palette.lightBlue.main;
      case "In Progress":
        return theme.palette.orange.light;
      case "Completed":
        return "#4CA97F";
      default:
        break;
    }
  };

  const bookingList = bookings.map((booking) => (
    <TableRow key={booking.id}>
      <TableCell>{booking.pet.name}</TableCell>
      {booking.sitter ? (
        <TableCell>
          {booking.sitter.user.firstName} {booking.sitter.user.lastName}
        </TableCell>
      ) : (
        <TableCell>
          {booking.owner.user.firstName} {booking.owner.user.lastName}
        </TableCell>
      )}
      <TableCell>{booking.from}</TableCell>
      <TableCell>{booking.to}</TableCell>
      <TableCell>{booking.total} BHD</TableCell>
      <TableCell>
        {booking.sitter ? (
          <StyledStatus
            disableTouchRipple
            color="inherit"
            theme={statusColor(booking.status)}
          >
            {booking.status}
          </StyledStatus>
        ) : (
          <StyledStatusButton
            variant="outlined"
            color="inherit"
            theme={statusColor(booking.status)}
            onClick={() => handleShow(booking)}
          >
            {booking.status}
          </StyledStatusButton>
        )}
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      {bookings.length !== 0 ? (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Pet Name</TableCell>
                  <TableCell>
                    {bookings[0].sitter ? "Sitter" : "Owner"} Name
                  </TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{bookingList}</TableBody>
            </Table>
          </TableContainer>
          {booking && (
            <StyledModal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Grid container spacing={2} justify="center">
                  <Grid item xs={8}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        label="Status"
                        value={booking.status}
                        onChange={handleChange}
                      >
                        <MenuItem disabled value="Pending">
                          Pending
                        </MenuItem>
                        <MenuItem value="Confirmed">Confirmed</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Modal.Body>
              <Modal.Footer>
                <StyledCancelButton
                  variant="outlined"
                  color="inherit"
                  theme={theme}
                  onClick={handleClose}
                >
                  Cancel
                </StyledCancelButton>
                <StyledSaveStatusButton
                  variant="outlined"
                  color="inherit"
                  theme={theme}
                  onClick={handleSubmit}
                >
                  Save
                </StyledSaveStatusButton>
              </Modal.Footer>
            </StyledModal>
          )}
        </>
      ) : (
        <Typography variant="overline" display="block" gutterBottom>
          You don't have any bookings
        </Typography>
      )}
    </>
  );
};

export default BookingData;
