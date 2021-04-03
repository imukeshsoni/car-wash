import "./styles.css";
import Navbar from "../../routes/navbar/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/index.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
