import './Home.css';
import CountryList from '../../components/CountryList/CountryList.jsx';
import { useState, useEffect } from 'react';


export default function Home({mode}) {
  // const [mode, setMode] = useState("dark");

  // useEffect(() => {
  //   if(sessionStorage.getItem("mode")) {
  //     setMode(sessionStorage.getItem("mode"));
  //   } else {
  //     sessionStorage.setItem("mode", mode);
  //   }
  // }, [])

  return (
    <main className={mode === "dark" ? 'home dark' : 'home'}>
      <CountryList mode={mode} />    
    </main>
  )
}
