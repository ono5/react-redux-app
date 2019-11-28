import React, {Component} from 'react';
import { VirtualTimeScheduler } from 'rxjs';

const App = () => ( <Counter/> )

class Counter extends Component {
  //　初期化
  constructor(props) {
    // 親クラスにpropsを渡す
    super(props)
    console.log(this.state)
    // stateが使えるようになる
    this.state = { count: 0}
  }
  handlePlusButton = () => {
    // setStateが実行されるとrenderが走る
    this.setState({ count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
      
      )
  }
}

export default App;
