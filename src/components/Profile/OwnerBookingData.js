import { useSelector } from "react-redux";

// Styling
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  StyledArrowDropDown,
  StyledAvatar,
  StyledChip,
  StyledDetailsButton,
} from "./styles";
import { FaCalendarCheck } from "react-icons/fa";

const OwnerBookingData = ({ theme }) => {
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
  const bookings = useSelector((state) => state.bookingReducer.bookings);

  const bookingList = bookings.map((booking) => (
    <TableRow key={booking.id}>
      <TableCell component="th" scope="row">
        {booking.id}
      </TableCell>
      <TableCell>{booking.pet.name}</TableCell>
      <TableCell>
        {booking.sitter.user.firstName} {booking.sitter.user.lastName}
      </TableCell>
      <TableCell>{booking.from}</TableCell>
      <TableCell>{booking.to}</TableCell>
      <TableCell>{booking.total} BHD</TableCell>
      <TableCell>
        <StyledChip
          label={booking.status}
          color="inherit"
          customColor={statusColor(booking.status)}
        />
        <StyledArrowDropDown />
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
      <StyledAvatar theme={theme}>
        <FaCalendarCheck />
      </StyledAvatar>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Reference</TableCell>
              <TableCell>Pet Name</TableCell>
              <TableCell>Sitter Name</TableCell>
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

export default OwnerBookingData;
