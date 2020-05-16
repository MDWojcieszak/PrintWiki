import React from "react";
import "./style/App.scss";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode);
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const mode = JSON.parse(localStorage.getItem("darkMode"));
    return mode || false;
  }
  return (
    <div className={darkMode ? "App dark-mode" : "App light-mode"}>
      <NavBar
        onChange={() => setDarkMode((prevMode) => !prevMode)}
        darkMode={darkMode}
      />
      <div className="container">
        <SideNav />
        <button className="btn btn-submit">SUBMIT</button>
        <button className="btn btn-default">Kliknij mnie</button>
      </div>
    </div>
  );
}

export default App;
