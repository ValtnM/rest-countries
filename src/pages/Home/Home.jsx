import './Home.css';
import CountryList from '../../components/CountryList/CountryList.jsx';
import { useState, useEffect } from 'react';


export default function Home({mode}) {

  return (
    <main className={mode === "dark" ? 'home dark' : 'home'}>
      <CountryList mode={mode} />    
    </main>
  )
}
