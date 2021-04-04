import { Redirect, Route, Switch } from "react-router";

// Components
import Home from "../Home";
import SignUp from "../Authentication/Signup";
import SignIn from "../Authentication/Signin";
import Profile from "../Profile";
import NotFound from "../NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/404">
        <NotFound />
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

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
