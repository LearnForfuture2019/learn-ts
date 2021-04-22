import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from "./component/Robot";
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {
          robots.map((robot)=>{
            return <Robot id={robot.id}
                          name={robot.name}
                          email={robot.email}
                          key={robot.id}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;
