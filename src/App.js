import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Drink from "./images/drink.jpg";
import Ricebowl from "./images/ricebowl.jpg";
import Cheeseburger from "./images/burger.jpg";
import Steak from "./images/steak.jpg";
import "./styles.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, cost: 1, name: "1 Drink", image: Drink }, //each counter component
      { id: 2, value: 0, cost: 5, name: "5 Cheeseburger", image: Cheeseburger },
      { id: 3, value: 0, cost: 10, name: "10 RiceBowl", image: Ricebowl },
      { id: 4, value: 0, cost: 20, name: "20 Steak", image: Steak },
    ],
  };

  get bank() {
    //function that initializes value of bank, loops through counter array and subtracts value from bank for each index in counter array
    let bank = 100;
    for (let i = 0; i < this.state.counters.length; i++) {
      bank = bank - this.state.counters[i].cost * this.state.counters[i].value;
    }
    return bank;
  }

  constructor() {
    super();
    this.handleReset = this.handleReset.bind(this); //need to bind functions for proper use if called by a child
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters]; //clone array
    const index = counters.indexOf(counter); //get index of counter
    counters[index] = { ...counter }; //clone counter object that is the received argument
    counters[index].value++; //increment value
    this.setState({ counters }); //set the new counter object
  }

  handleDelete(counter) {
    const counters = [...this.state.counters]; //clone array
    const index = counters.indexOf(counter); //get index of counter
    counters[index] = { ...counter }; //clone counter object that is the received argument
    counters[index].value--; //increment value
    this.setState({ counters }); //set the new counter object
  }

  handleReset() {
    const counters = this.state.counters.map((c) => {
      c.value = 0; //for loop where for c in counters
      return c;
    });
    this.setState({ counters });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar bank={this.bank} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
