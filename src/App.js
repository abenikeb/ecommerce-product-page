import React, { Component } from "react";
import NavBar from "./components/navBar";
import Product from "./components/product";
import { getItems, getItemsById } from "./services/fakeProductsService";
import "./App.css";

class App extends Component {
  state = {
    items: getItemsById(1),
  };

  // coponentDidMount() {
  //   this.setState({ items: getItems() });
  // }

  render() {
    console.log(this.state.items);
    const { items } = this.state;
    return (
      <div>
        <NavBar />
        <main>
          <Product items={items} />
        </main>
      </div>
    );
  }
}

export default App;
