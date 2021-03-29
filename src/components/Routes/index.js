import { Redirect, Route, Switch } from "react-router";

// Components
import Home from "../Home";
import SignUp from "../User/SignUp";
import SignIn from "../User/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route path="/404">{/* <NotFound /> */}</Route>

      <Route path="/profile/sitter"></Route>

      <Route path="/profile"></Route>

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
