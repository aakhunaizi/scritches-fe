// Styling
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTheme } from "@material-ui/core";
import { StyledAvatar, StyledDetailsButton } from "./styles";
import { FaCalendarCheck } from "react-icons/fa";

// Dummy data

function createData(
  reference,
  petName,
  sitterName,
  from,
  to,
  price,
  status,
  options
) {
  return { reference, petName, sitterName, from, to, price, status, options };
}

const OwnerBookingData = () => {
  const theme = useTheme();

  const rows = [
    createData(
      "32",
      "Oreo",
      "Hamza",
      "2020-03-22",
      "2020-03-23",
      "7 BHD",
      "Completed",
      <StyledDetailsButton variant="outlined" color="inherit" theme={theme}>
        Details
      </StyledDetailsButton>
    ),
    createData(
      "58",
      "Oreo",
      "Hamza",
      "2020-03-27",
      "2020-03-31",
      "25 BHD",
      "In Progress",
      <StyledDetailsButton variant="outlined" color="inherit" theme={theme}>
        Details
      </StyledDetailsButton>
    ),
  ];
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
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.reference}
                </TableCell>
                <TableCell>{row.petName}</TableCell>
                <TableCell>{row.sitterName}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.options}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OwnerBookingData;
