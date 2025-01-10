import './App.css';
import {useEffect, useState} from "react"

import Header from './components/header';
import MainContent from './components/mainContent';
import Menu from './components/menu';

function App() {
  
  // setting some placeholders
  const fname = "john doe";
  const points = 0;



  const initData = window.Telegram.WebApp.initData;

  const params = new URLSearchParams(initData);
  const user = JSON.parse(params.get('user'));

  console.log(user); // { id: 123456789, first_name: "John", ... }
  const items = Object.entries(user);

  return (
    <div className="App">
      <Header fname={fname} />
      <MainContent points={points} />
      <p>{items}</p>
      <Menu />
    </div>
  );
}

export default App;
