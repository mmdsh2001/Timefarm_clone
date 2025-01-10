import './App.css';
import {useEffect, useState} from "react";
import dotenv from "dotenv";

import Header from './components/header';
import MainContent from './components/mainContent';
import Menu from './components/menu';




function App() {
  
  dotenv.config();
  const serverUrl = process.env.server_domain
  // setting some placeholders
  const fname = "john doe";
  const points = 0;


  const initData = window.Telegram.WebApp.initData;
  if (initData){

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${serverUrl}/api/validate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(initData),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
  
      fetchData();
    }, []);
  }

  // const params = new URLSearchParams(initData);
  // const user = JSON.parse(params.get('user'));

  // console.log(user); // { id: 123456789, first_name: "John", ... }
  // const items = Object.entries(user);

  return (
    <div className="App">
      <Header fname={fname} />
      <MainContent points={points} />
      <Menu />
    </div>
  );
}

export default App;
