import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Main,
  Benefit,
  Benefits,
  Calendar,
  SignUp,
  ErrorPage,
  SearchID,
  Reregister,
} from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/benefits" component={Benefits} />
      <Route exact path="/benefit/:cardNum" component={Benefit} />
      <Route exact path="/searchID" component={SearchID} />
      <Route exact path="/reregister" component={Reregister} />
      <Route exact path="/" component={Main} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default React.memo(App);
