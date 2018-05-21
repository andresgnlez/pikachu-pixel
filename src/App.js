import React, { Component } from 'react';
import logo from './logo.svg';

import { Pikachu } from './pikachu';


class App extends Component {
  render() {
    console.log(Pikachu)
    return (
      <div className="app-container">
        <div className="grid-container">
         {Pikachu.map((row, rowIndex) => (
            <div className={`row row-${rowIndex}`} key={rowIndex}>
              {row.split(' ').map((colour, columnIndex) => (<div key={columnIndex} className={`pixel ${rowIndex}-${columnIndex} -${colour}`}/> ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
