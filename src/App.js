import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <div class='hero'>
        <div class='wall'></div>
        <div class='stars'></div>
        <div class='robo'>
          <img src={require('../src/robo.png')} />
        </div>
        <div class='weels'>
          <img src={require('../src/weels.png')} className='frontweel'/>
          <img src={require('../src/weels.png')} className='backweel'/>
        </div>
      </div>

    </div>
  );
}

export default App;
