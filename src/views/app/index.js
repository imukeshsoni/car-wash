import "./styles.css";
import Navbar from "../../routes/navbar/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/index.js";
import Login from "../login/index.js";
import services from "../services/index.js";
import SignUp from "../sign-up/index.js";
import Profile from "../profile/index.js";
import CheckOut from "../check-out/index.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/services" exact component={services} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/checkout" exact component={CheckOut} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
