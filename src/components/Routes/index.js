import { Redirect, Route, Switch } from "react-router";

// Components
import Home from "../Home";
import SignUp from "../User/SignUp";
import SignIn from "../User/SignIn";
import Profile from "../Profile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/404">{/* <NotFound /> */}</Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
