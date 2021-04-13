import { useSelector } from "react-redux";

// Styling
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { StyledChip, StyledDetailsButton } from "./styles";

const BookingData = ({ theme }) => {
  const bookings = useSelector((state) => state.bookingReducer.bookings);

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
        <StyledChip
          label={booking.status}
          color="inherit"
          custom={statusColor(booking.status)}
        />
      </TableCell>
      <TableCell>
        <StyledDetailsButton variant="outlined" color="inherit" theme={theme}>
          Details
        </StyledDetailsButton>
      </TableCell>
    </TableRow>
  ));

  return (
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
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{bookingList}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BookingData;
