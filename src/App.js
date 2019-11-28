import React, {Component} from 'react';

// class App extends Component {
//   render() {
//     // const greeting = "Hi, This is Mono!"
//     // const dom = <h1 className="foo">{greeting}</h1>
//     // return dom
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return <div>
          <Cat />
          <Cat />
          <Cat />
          <Cat />
         </div>
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
