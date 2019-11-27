import React, {Component} from 'react';

class App extends Component {
  render() {
    // const greeting = "Hi, This is Mono!"
    // const dom = <h1 className="foo">{greeting}</h1>
    // return dom
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I am clicked!")}} />
      </React.Fragment>
    )
  }
}

export default App;
