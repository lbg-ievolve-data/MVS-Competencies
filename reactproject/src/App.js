import React, { Component } from 'react';
import './App.css'; 
import styles from './App.css';
import Index1 from './Index1';
import Webpage1 from './Webpage1';

const App = () => {
    return (
        <div classname="App">
            <Webpage1 />
            <h2 className={styles.parastyle}> Welcome To Lloyds Banking Group</h2>
             
            <img src="./Images/images.jpg" alt=""/>
            <br />
           
            <Index1 />
            
        </div>
        
      )
}

export default App;
