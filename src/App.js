import Navabar from "./components/Navabar";
import Form from "./components/Form";
import About from "./components/About";
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f162b";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const newMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
     <Router>
        <Navabar
          title="TextChange"
          aboutTitle="About Us"
          mode={mode}
          toggleMode={toggleMode}
          newMode={newMode}
        />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Form heading="Enter your text Below" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
