import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
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
      sessionStorage.setItem("mode", "light");
    }
  }, [])
  
  useEffect(() => {
    sessionStorage.setItem("mode", mode);
  }, [mode])
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home mode={mode} />
    },
    {
      path: '/details/:country',
      element: <CountryDetails mode={mode} />
    }
  ])
  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
