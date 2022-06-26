// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {useState} from 'react';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);//alert is object

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title="TextUtils is amazing";
      // }, 1000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1000);

    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}/>            
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}/>            
          </Routes>
        </div>

      </Router>
    </>

  );
}

export default App;
