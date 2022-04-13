import React, { Component } from "react";
import Counter from "./counter";
import "../styles.css";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset} //when button is clicked reset
          className="btn btn-primary btn-sm m-2" //button styling
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement} //call increment function from app.jsx
            onDelete={this.props.onDelete}
            counter={counter}
            name={counter.name}
            image={counter.image}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
