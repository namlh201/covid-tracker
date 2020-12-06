import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Global from "./components/Page/Global/Global.js";
import Countries from "./components/Page/Countries/Countries.js";
import Maps from "./components/Page/Maps/Maps.js";

import "tabler-react/dist/Tabler.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/global" />
            </Route>
            <Route path="/global" component={Global} />
            <Route path="/countries" component={Countries} />
            <Route path="/maps" component={Maps} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
