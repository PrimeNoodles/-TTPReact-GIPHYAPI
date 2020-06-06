import React, { Component } from 'react';
import GifCard from './Components/GifCard';
import './App.css';


class App extends Component {
  render(){
    return (
      <div>
      <div className = " container-fluid p-4 bg-danger text-white text-center "> GIPHY SEARCH</div>
      <div className="container">
        <div>
        <GifCard
        />
        </div>
      </div>
      
      </div>
    );
  }
}


export default App;