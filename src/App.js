// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert =(message , type)=>{
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(() => {
            setAlert(null)
          }, 1000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark Mode has Been Enabled", "success")
    document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has Been Enabled", "success")
      document.title = "TextUtlis - Light Mode"
    }
  }
  return (
   
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
       
      <div className="container my-3">

      <Routes>
      <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
      <Route exact path='/About' element={<About/>} />      
        </Routes>
       
      </div>
      </Router>
    </>
  );
}

export default App;
