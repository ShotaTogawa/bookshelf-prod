import React, { Component } from "react";
import Home from "./components/home/Home";

// package.json にコメント出来なかったので代わりにここに書くのですが
// lodash もいいのですが、似たようなライブラリの ramda が個人的におすすめです
// https://www.codementor.io/@michelre/functional-javascript-why-i-prefer-using-ramda-over-lodash-or-underscore-dzovysq11

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
