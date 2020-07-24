import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleIncreament = () => {
    let { counter } = this.state;
    counter = ++counter;
    this.setState({ counter });
  };
  render() {
    return (
      <div className="container mt-4">
        <button
          onClick={this.handleIncreament}
          className="btn btn-primary d-block m-auto"
        >
          Increament
        </button>
        <h1 className="text-center mt3">{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
