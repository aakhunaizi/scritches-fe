// Styling
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTheme } from "@material-ui/core";
import { BsCalendar } from "react-icons/bs";
import { StyledEditButton, StyledAvatar } from "./styles";

// Dummy data

function createData(from, to, options) {
  return { from, to, options };
}

const SitterSchedule = () => {
  const theme = useTheme();
  const rows = [
    createData(
      "2020-03-22",
      "2020-03-23",
      <StyledEditButton variant="outlined" color="inherit" theme={theme}>
        Edit
      </StyledEditButton>
    ),
  ];
  return (
    <>
      <StyledAvatar theme={theme}>
        <BsCalendar />
      </StyledAvatar>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.from}
                </TableCell>
                <TableCell>{row.to}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SitterSchedule;
