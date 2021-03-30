import { Grid, Typography } from "@material-ui/core";

import { Image } from "react-bootstrap";
import SitterData from "./SitterData";

const UserData = ({ user }) => {
  return (
    <div>
      <Grid item xs={12} sm={4}>
        <Image
          src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
          fluid
          roundedCircle
        />
      </Grid>
      <br />
      <Typography>@{user.username}</Typography>
      {user.type === "petSitter" && <SitterData />}
    </div>
  );
};

export default UserData;
