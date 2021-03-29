import { Avatar } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const UserData = () => {
  const classes = useStyles();
  return (
    <div className={classes.large}>
      <Avatar className={classes.green}>
        <AssignmentIcon />
      </Avatar>
    </div>
  );
};

export default UserData;
