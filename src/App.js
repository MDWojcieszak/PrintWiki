import React from "react";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Printers from "./Views/Printers";
import PrintersSettings from "./Views/PrintersSettings";
import Filaments from "./Views/Filaments";
import FilamentsSettings from "./Views/FilamentsSettings";
import CreatePrinter from "./Views/CreatePrinter";
import CreatePrinterSettings from "./Views/CreatePrinterSettings";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode);
  React.useEffect(() => {
    localStorage.setItem("darknpm startMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const mode = JSON.parse(localStorage.getItem("darkMode"));
    return mode || false;
  }

  return (
    <Router>
      <div className={darkMode ? "App dark-mode" : "App light-mode"}>
        <NavBar
          onChange={() => setDarkMode((prevMode) => !prevMode)}
          darkMode={darkMode}
        />
        <SideNav />
        <Switch>
          <Route
            exact
            path="/printers-settings"
            component={PrintersSettings}
          ></Route>
          <Route exact path="/printers" component={Printers}></Route>

          <Route exact path="/filaments-settings">
            <FilamentsSettings />
          </Route>
          <Route exact path="/filaments">
            <Filaments />
          </Route>
          <Route exact path="/createPrinter">
            <CreatePrinter />
          </Route>
          <Route exact path="/createPrinterSettings">
            <CreatePrinterSettings />
          </Route>
        </Switch>

        {/* <button className="btn btn-default">Kliknij mnie</button> */}
      </div>
    </Router>
  );
}

export default App;
