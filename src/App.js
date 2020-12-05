import React, { useEffect, useState } from "react";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import SideNav from "./components/SideNav";
import Printers from "./Views/Printers";
import PrintersSettings from "./Views/PrintersSettings";
import Filaments from "./Views/Filaments";
import FilamentsSettings from "./Views/FilamentsSettings";
import CreatePrinter from "./Views/CreatePrinter";
import CreatePrinterSettings from "./Views/CreatePrinterSettings";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import Printer from "./Views/PrinterView";
import { GetData } from "./services/GetData";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);
  const [userLogin, setUserLogin] = useState(false);
  const [userData, setUserData] = useState();
  React.useEffect(() => {
    localStorage.setItem("darknpm startMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (userLogin) {
      GetData("/user/info", localStorage.getItem("token")).then((data) => {
        if (data.error) {
          setUserLogin(false);
        } else {
          setUserData(data);
          console.log(data);
        }
      });
    }
  }, [userLogin]);
  useEffect(() => {
    try {
      if (localStorage.getItem("token") != null) {
        setUserLogin(true);
        console.log("user is logged in!");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setUserLogin(false);
  };

  function getInitialMode() {
    const mode = JSON.parse(localStorage.getItem("darkMode"));
    return mode || false;
  }
  return (
    <Router>
      <div className={darkMode ? "App dark-mode" : "App light-mode"}>
        <NavBar
          //onChange={() => setDarkMode((prevMode) => !prevMode)}
          //darkMode={darkMode}
          userLogin={userLogin}
          logout={logout}
          user={userData}
        />
        <SideNav />
        <Switch>
          <Route exact path="/sign-in">
            <SignIn userLogin={setUserLogin} />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/printers-settings">
            <PrintersSettings userLogin={userLogin} />
          </Route>
          <Route exact path="/printers">
            <Printers userLogin={userLogin} />
          </Route>
          <Route exact path="/printers/:id" component={Printer}></Route>
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
