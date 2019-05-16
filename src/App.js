import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from './components/Timeline.jsx'




function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <p style={{textAlign:'left'}}>Facebook</p> 
      </header>

       <Timeline/>
       
  
    </div>
  );
}

export default App;
