import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter > 10) {
      throw new Error('You have reached your maximum limit');
    }
    return (
      <>
        <p>Counter can be clicked upto 10 </p>
        <button onClick={this.handleClick}>Counter {this.state.counter}</button>
      </>
    );
  }
}

export default Counter;
