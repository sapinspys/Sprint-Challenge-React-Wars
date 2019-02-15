import React, { Component } from 'react';
import './App.css';

import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsChars2: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getMoreCharacters('https://swapi.co/api/people/?page=2');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getMoreCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars2: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">REACT <br/> WARS</h1>
        <div className="character-list">
          {this.state.starwarsChars.map((char,index) => (
            <Character key={index} character={char}/>
          ))}
          {this.state.starwarsChars2.map((char,index) => (
            <Character key={index} character={char}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
