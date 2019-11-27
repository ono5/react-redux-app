# react-redux-app

## JSX
JSXは、JavaScriptXMLの略でJavaScriptを拡張したテンプレート言語。


```
class App extends Component {
  render() {
    return <h1>Hello World</h1> /* JSX */
  }
}
```

このコードが変換される⬇︎。 

```
class App extends Component {
  render() {
    // import React, {Component} from 'react' -> createElementに変換される（JSXを使うときは必須)
    return React.createElement(
        "h1",
        null,
        "Hello, world!!"
    )
  }
}
```

JSXを使えば直感的にコードがかける。


## React.Fragment

Reactは、複数の要素を返すときはdivタグで囲まなければならないが、React.Fragmentで代用できる。
しかも、ブラウザ上の要素にそれが現れない。divタグで囲った場合は、divタグが出力されてしまう。


```
class App extends Component {
  render() {
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I am clicked!")}} />
      </React.Fragment>
    )
  }
}
```