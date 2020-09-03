import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  document.body.onkeydown = function(e) {
    if( e.keyCode == '39' ) {
      console.log("space");
      var all = document.getElementsByClassName('stars');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="running";
      }
      var all = document.getElementsByClassName('backweel');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="running";
      }
      var all = document.getElementsByClassName('frontweel');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="running";
      }
      var all = document.getElementsByClassName('wall');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="running";
      }
    }
    else if( e.keyCode == '37' ) {
      console.log("a");
      var all = document.getElementsByClassName('stars');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="paused";
      }
      var all = document.getElementsByClassName('backweel');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="paused";
      }
      var all = document.getElementsByClassName('frontweel');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="paused";
      }
      var all = document.getElementsByClassName('wall');
      for (var i = 0; i < all.length; i++) {
        all[i].style.animationPlayState="paused";
      }
    }
  }
 
    
  
  
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
