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

## Babel
[Babel repl](https://babeljs.io/repl)

Reactは、Babelが組み込まれているから便利かもしれない。

```
const foo = <div>
  Hello, world!
  </div>
```

```
"use strict";

var foo = React.createElement("div", null, "Hello, world!");
```

## Webpack

JavaScript, CSS, 画像などの静的ファイルを一つのJavaScriptファイルにしてくれる便利ツール。

Reactでも使用されている。

```
<script src="/static/js/bundle.js"></script>
```


## Props
Propsは、Componentの属性のこと。
