import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Main, Benefit, Benefits, Calendar, SignUp } from "./pages";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/benefits" component={Benefits} />
      <Route exact path="/benefit" component={Benefit} />
      <Route exact path="/" component={Main} />
    </>
  );
}

export default React.memo(App);
