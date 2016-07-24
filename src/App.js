import React, { Component } from 'react';
import Location from './Location';
import Button from './Button';
import Record from './Record';
import './App.css';

class App extends Component {
  constructor() { 
    super();
    
    this.state = {
      planet: ''
    };

    const ws = new WebSocket('ws://jedi.smartjs.academy');
    ws.addEventListener('message', ({ data }) => {
      const { name } = JSON.parse(data);
      this.setState({ planet: name });
    })
  }

  render() {
    const { planet } = this.state;
    return (
        <div className="app-container">
        <div className="css-root">
          <Location planet={planet} />
          <section className="css-scrollable-list">
            <ul className="css-slots">
              <li className="css-slot">
                <h3>Jorak Uln</h3>
                <h6>Homeworld: Korriban</h6>
              </li>
              <li className="css-slot">
                <h3>Skere Kaan</h3>
                <h6>Homeworld: Coruscant</h6>
              </li>
              <li className="css-slot">
                <h3>Na'daz</h3>
                <h6>Homeworld: Ryloth</h6>
              </li>
              <li className="css-slot">
                <h3>Kas'im</h3>
                <h6>Homeworld: Nal Hutta</h6>
              </li>
              <Record className="css-slot" lord={{ name: 'Test', homeworld: 'test'}} />
            </ul>
            <div className="css-scroll-buttons">
              <Button className="css-button-up" />
              <Button className="css-button-down" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
