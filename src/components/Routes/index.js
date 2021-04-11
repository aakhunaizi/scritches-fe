import { Redirect, Route, Switch } from "react-router";

// Components
import Home from "../Home";
import SignUp from "../Authentication/Signup";
import SignIn from "../Authentication/Signin";
import Profile from "../Profile";
import NotFound from "../NotFound";
import SittersList from "../SittersList";
import SitterPublicProfile from "../SitterPublicProfile";
import Booking from "../Booking";

const Routes = () => {
  return (
    <Switch>
      <Route path="/404">
        <NotFound />
      </Route>

      <Route path="/booking">
        <Booking />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/search">
        <SittersList />
      </Route>

      <Route path="/sitters/:username">
        <SitterPublicProfile />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
