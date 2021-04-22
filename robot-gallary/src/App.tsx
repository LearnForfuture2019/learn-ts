import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockdata/robots.json'
import Robot from "./component/Robot";
function App() {
  return (
    <ul>
      {
        robots.map((robot)=>{
          return <Robot id={robot.id}
                 name={robot.name}
                 email={robot.email}
                 key={robot.id}
          />
        })
      }
    </ul>
  );
}

export default App;
