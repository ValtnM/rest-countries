import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import CountryDetails from './pages/CountryDetails/CountryDetails';

function App() {

  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:country" element={<CountryDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
