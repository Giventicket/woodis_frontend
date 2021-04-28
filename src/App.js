import { Route } from "react-router-dom";
import { Main, Benefit, Benefits, Calendar, SignUp } from "./pages";

function App() {
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

export default App;
