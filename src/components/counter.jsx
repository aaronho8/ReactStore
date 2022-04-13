import React, { Component } from "react";
import "../styles.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <img className="foodpics" src={this.props.image}></img>
        <span className="badge rounded-pill bg-secondary">
          {" "}
          {"$"}
          {this.props.name}{" "}
        </span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //when button is clicked call function from counters.jsx
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    //shortcut for styling of icon based on value
    let classes = "badge m-2 ";
    if (this.props.counter.value === 0) {
      classes = classes + "bg-warning";
    } else if (this.props.counter.value !== 0) {
      classes = classes + "bg-primary";
    }
    return classes;
  }

  formatCount() {
    //what to return based on value
    if (this.props.counter.value === 0) {
      return "Zero";
    } else {
      return this.props.counter.value;
    }
  }
}

export default Counter;
