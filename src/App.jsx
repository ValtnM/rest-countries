import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import CountryDetails from './pages/CountryDetails/CountryDetails';

function App() {
  const [mode, setMode] = useState("");

  useEffect(() => {
    if(sessionStorage.getItem("mode")) {
      setMode(sessionStorage.getItem("mode"));
    } else {
      sessionStorage.setItem("mode", mode);
    }
  }, [])

  useEffect(() => {
    console.log("change");
  }, [mode])

  return (
      <BrowserRouter basename="/">
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />}></Route>
          <Route path="/details/:country" element={<CountryDetails mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
