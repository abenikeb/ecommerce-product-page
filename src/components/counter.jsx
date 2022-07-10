import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Counter extends Component {
  render() {
    return (
      <div className="flex gap-4">
        <span className={this.getBadge()}>{this.returnValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-active btn-accent"
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-sm btn-active btn-accent"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          <FontAwesomeIcon icon="fa-solid fa-minus" />
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-sm btn-danger"
        >
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
      </div>
    );
  }

  // helepr function
  getBadge() {
    let classes =
      this.props.counter.value === 0
        ? "p-2 rounded-md text-white bg-yellow-600"
        : "mr-2 px-4 py-2 rounded-md text-white bg-blue-400";
    return classes;
  }

  returnValue() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getDecrement() {
    let classes =
      this.props.counter.value === 0
        ? "btn btn-sm btn-disabled"
        : "btn btn-sm btn-active btn-accent";
    return classes;
  }
}

export default Counter;
