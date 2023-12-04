import Navbar from "./components/Navbar"
import './App.css';
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null)

  function modeToggler() {
    setDarkMode(prevMode => !prevMode)
    document.body.style.backgroundColor = darkMode ? 'white' : '#343a40'
    showAlert(`${darkMode ? 'light' : 'dark'} mode has been enabled`,"success")

  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  return (
    <>
    <Router>
        <Navbar
          title="TextUtil"
          mode={darkMode ? 'dark' : 'light'}
          toggler={modeToggler}
          modeText={darkMode ? 'light' : 'dark' }
        />
        <Alert
          alert = {alert}
        />
        <div className="container my-3">
        <Routes>
          <Route
              exact
              path="/"
              element={<TextForm
            heading="Enter the text below to analyze"
            mode={darkMode ? 'dark' : 'light'}
            modeText={darkMode ? 'light' : 'dark'}
            showAlert ={showAlert}
          />}
          ></Route>
          <Route
              exact
              path="/about"
              element={<About
                mode={darkMode ? 'dark' : 'light'}
                modeText={darkMode ? 'light' : 'dark'}
              />}
          ></Route>
          </Routes>
        </div>
      </Router>
    
    </>
  );
}

