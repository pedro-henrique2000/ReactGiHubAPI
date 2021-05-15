import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/:username" exact>
        <User />
      </Route>
      <Route path="/*">
        return <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
