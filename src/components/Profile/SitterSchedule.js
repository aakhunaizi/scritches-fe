// Styling
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

// Dummy data

function createData(from, to, options) {
  return { from, to, options };
}

const rows = [
  createData(
    "2020-03-22",
    "2020-03-23",
    <Button variant="outlined" color="primary">
      Edit
    </Button>
  ),
];

const SitterSchedule = ({ user }) => {
  return (
    <>
      {user.type === "petSitter" && (
        <Button variant="outlined" color="primary">
          Add
        </Button>
      )}

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              {user.type === "petSitter" && <TableCell>Options</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.from}
                </TableCell>
                <TableCell>{row.to}</TableCell>
                {user.type === "petSitter" && (
                  <TableCell>{row.options}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SitterSchedule;
