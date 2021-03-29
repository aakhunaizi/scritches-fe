//React Imports
import { Route, Switch } from "react-router";

//Components
import Home from "../Home";
import SignUp from "../User/SignUp";
import SignIn from "../User/SignIn";


const Routes = () => {
  return (
    <Switch>
      <Route path={"/signup"}>
        <SignUp />
      </Route>
      <Route path={"/signin"}>
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
