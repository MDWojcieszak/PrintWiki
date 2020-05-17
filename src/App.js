import React from "react";
import "./style/App.scss";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";

function App() {
  const [p, setP] = React.useState(false);
  const [ps, setPs] = React.useState(false);
  const [f, setF] = React.useState(false);
  const [fs, setFs] = React.useState(false);
  const [ru, setRu] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(getInitialMode);
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const mode = JSON.parse(localStorage.getItem("darkMode"));
    return mode || false;
  }
  function onClick(e) {
    switch (e.currentTarget.id) {
      case "0":
        setRu(!ru);
        break;
      case "1":
        setP(true);
        setPs(false);
        setF(false);
        setFs(false);
        break;
      case "2":
        setP(false);
        setPs(true);
        setF(false);
        setFs(false);
        break;
      case "3":
        setP(false);
        setPs(false);
        setF(true);
        setFs(false);
        break;
      case "4":
        setP(false);
        setPs(false);
        setF(false);
        setFs(true);
        break;
    }
  }
  return (
    <div className={darkMode ? "App dark-mode" : "App light-mode"}>
      <NavBar
        onChange={() => setDarkMode((prevMode) => !prevMode)}
        darkMode={darkMode}
      />
      <SideNav
        onClick={onClick}
        printers={p}
        printersSettings={ps}
        filaments={f}
        filamentsSettings={fs}
        rolledUp={ru}
      />
      <button className="btn btn-submit">SUBMIT</button>
      <button className="btn btn-default">Kliknij mnie</button>
    </div>
  );
}

export default App;
