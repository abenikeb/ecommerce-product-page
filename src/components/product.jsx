import React from "react";
import GroupList from "./groupList";

function Product({ items, OnIncrement, OnDcrement, count }) {
  return (
    <>
      <div className="inner-container">
        {/* image container section */}
        <section className="product-image-card">
          <img src={require("../images/image-product-1.jpg")} alt="her is" />
          <GroupList imageItems={items.images} />
        </section>

        {/* product-description container section */}
        <section className="product-description">
          <h1 className="title-header">Sneaker Company</h1>
          <h1 className="title">fall limited edition sneakers</h1>
          <p className="description">{items.description}</p>
          <h2 className="price">${items.originalPrice}</h2>
          <p className="discount-price">${items.discountPrice}</p>
          <div className="buttons-container">
            <div className="button-increment-contaier">
              <button
                onClick={OnDcrement}
                className="button-increment"
                disabled={count == 0 ? "disabled" : ""}
              >
                -
              </button>
              <span className="counter-badge">{count}</span>
              <button onClick={OnIncrement} className="button-increment">
                +
              </button>
            </div>
            <button className="button-warning">Add to cart</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Product;
