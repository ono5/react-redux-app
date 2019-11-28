import React, {Component} from 'react';
import { connect } from 'react-redux'

import {increment, decrement } from '../actions'


class App extends Component {

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
      
      )
  }
}

// stateからこのコンポーネントに必要なstateを取り出して、propsにマッピングする
const mapStateToProps = state => ({ value: state.count.value })

// あるアクションが発生した時にreducerにタイプに応じた状態遷移を実行させる機能
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)
