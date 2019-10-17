import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor()");
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render()");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
