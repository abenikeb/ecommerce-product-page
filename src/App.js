import React, { Component } from "react";
import NavBar from "./components/navBar";
import Product from "./components/product";
import { getItems, getItemsById } from "./services/fakeProductsService";
import "./App.css";

class App extends Component {
  state = {
    items: getItemsById(1),
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDcrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log(this.state.items);
    const { items, count } = this.state;
    return (
      <div className="container">
        <NavBar />
        <div class="divider"></div>
        <main>
          <Product
            items={items}
            count={count}
            OnIncrement={this.handleIncrement}
            OnDcrement={this.handleDcrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
