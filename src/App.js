import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@fluentui/react-northstar';
import axios from 'axios' ;


class App extends Component{
  
  handleClick=()=>{
    console.log("clicked");
    let  url="http://127.0.0.1:5000"
  axios.get(url)
    .then(function (response) {
      let data =response.data
      console.log(data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button content="Click Here" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
