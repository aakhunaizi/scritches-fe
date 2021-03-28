//React Imports
import { Route, Switch } from "react-router";

//Components
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
    </Switch>
  );
};

export default Routes;
