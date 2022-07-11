import React from "react";
import GroupList from "./groupList";

function Product({
  items,
  OnIncrement,
  OnDcrement,
  count,
  onImageSelect,
  selectedItem,
  onSelectNextImage,
}) {
  const slectedItemClass = !selectedItem ? items.images[0] : selectedItem;
  return (
    <>
      <div className="inner-container">
        {/* image container section */}
        <section className="product-image-card">
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img
                src={require(`../images/${slectedItemClass}`)}
                className="relative"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* <div className="button-carousel">
            <button
  
              className="btn btn-circle bg-white text-black border-none font-bold"
            >
              ❮
            </button>
            <button className="btn btn-circle bg-white text-black border-none font-bold">
              ❯
            </button>
          </div> */}
          <GroupList imageItems={items.images} onImageSelect={onImageSelect} />
        </section>

        {/* product-description container section */}
        <section className="product-detail">
          <h4 className="brand-title">Sneaker Company</h4>
          <h1 className="title">fall limited edition sneakers</h1>
          <p className="description">{items.description}</p>
          <div className="price-wrap">
            <h2 className="price">${items.originalPrice}</h2>
            <p className="discount-price">${items.discountPrice}</p>
          </div>
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
