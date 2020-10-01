import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Target from './Target';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        text: 'Task For "priority"',
      },
      {
        id: 2,
        text: 'Task For Easy',
      },
      {
        id: 3,
        text: 'Task For "2days"',
      },
      {
        id: 4,
        text: 'Task For "3 days"',
      },
      {
        id: 5,
        text:
          'Task For Testing',
      },
      {
        id: 6,
        text: 'Task For Tommrow',
      },
      {
        id: 7,
        text: 'Task For "Backend"',
      },
    ],
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1 className="App-title">Drag And Drop your Task Shuttle ;) </h1>
          <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
