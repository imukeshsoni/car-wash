import "./styles.css";
import Navbar from "../../routes/navbar/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/index.js";
import Login from "../login/index.js";
import services from "../services/index.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/services" exact component={services} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
