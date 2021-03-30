import { Button, Grid, Typography } from "@material-ui/core";

import { Image } from "react-bootstrap";
import SitterData from "./SitterData";

const UserData = ({ user }) => {
  return (
    <>
      <Image
        src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
        fluid
        roundedCircle
        style={{ width: "50%", marginBottom: "5%" }}
      />
      <br />
      <Typography variant="h6">@{user.username}</Typography>
      {user.type === "petSitter" && <SitterData />}
      <Button variant="outlined" color="primary" style={{ marginTop: "2%" }}>
        Edit
      </Button>
    </>
  );
};

export default UserData;
