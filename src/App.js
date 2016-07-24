import React, { Component } from 'react';
import Location from './Location';
import Button from './Button';
import Record from './Record';
import './App.css';
import fetch from './helper/fetch';

function updateList(list, url, data) {
  if (!data) { return list; }
  const newList = [...list];
  const index = list.indexOf(url);
  if (!list[index - 1] ) {
    newList[index - 1] = data.master.url;
  }
  if (!list[index + 1]) {
    newList[index + 1] = data.apprentice.url; 
  }
  return newList;
}


class App extends Component {
  constructor() { 
    super();
    this.state = {
      planet: '',
      lords: {},
      list: [
        'http://jedi.smartjs.academy/dark-jedis/3616',
        ...Array(4)
      ]
    };

    this.loadLords();

    const ws = new WebSocket('ws://jedi.smartjs.academy');
    ws.addEventListener('message', ({ data }) => {
      const { name } = JSON.parse(data);
      this.setState({ planet: name });
    })
  }

  loadLords = () => {
    const { lords, list } = this.state; 
    list.forEach(url => {
      if (!url) { return; }
      if (!lords[url]) {
        lords[url] = fetch(url).then(data => {
          this.setState({
            lords: {
              ...this.state.lords,
              [url]: data,
            },
            list: updateList(this.state.list, url, data)
          }, this.loadLords);
        })
      }
    });
  }

  scroll = direction => () => {
    const { list: oldList, lords } = this.state;
    let list;
    switch (direction) {
      case 'up': 
        list = updateList([
          ...Array(2),
          ...oldList.slice(0, 3)
        ], oldList[0], lords[oldList[0]]);
        break;

      case 'down':
        list = updateList([
          ...oldList.slice(2, 5),
          ...Array(2)
        ], oldList[2], lords[oldList[2]]);
        break;

      default: 
        throw new Error('Invalid direction')
    }
    this.setState({ list: list }, this.loadLords); 
  }

  render() {
    const { planet, list, lords } = this.state;
    return (
        <div className="app-container">
        <div className="css-root">
          <Location planet={planet} />
          <section className="css-scrollable-list">
            <ul className="css-slots">
              { list.map((item, i) => 
                lords[item] instanceof Promise 
                  ? <Record className="css-slot" />
                  : <Record className="css-slot" lord={lords[item]} />
              )}
            </ul>
            <div className="css-scroll-buttons">
              <Button className="css-button-up" onClick={this.scroll('up')} />
              <Button className="css-button-down" onClick={this.scroll('down')} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
