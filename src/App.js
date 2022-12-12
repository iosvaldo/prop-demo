import "./App.css";
import Product from "./Product";
import React, { useState } from "react";

function App() {

const items = [
  {
    id: 1,
    name: "iPhone",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202209_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660744858995",
    features: ["A14 Bionic chip", "iOS 16"],
  },
  {
    id: 2,
    name: "iMac",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=627&hei=566&fmt=jpeg&qlt=95&.v=1617479508000",
    features: ["1080p Camera", "Finger ID"],
  },
  {
    id: 3,
    name: "MackBook Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=843&fmt=jpeg&qlt=95&.v=1632788574000",
    features: ["M1 Chip", "HDR", "great battery"],
  },
];

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  const imageList = items.map((item) => (
    <div className="img__container">
      <img
        className="apple__img"
        key={items.id}
        src={item.image}
        alt={item.name}
      />
    </div>
  ));

  
  return (
    <div className="app">
      <h1>Product Category Title</h1>
      <Product name="iPhone" description="short decription" price={1500.0} />

      <Product
        name="MacBook Pro"
        description="short decription"
        price={800.0}
      />
      {imageList}
      <Product name="iMac" description="short decription" price={150.0} />

      <div>
        <h1>useState</h1>
        <h2>this is my counter app</h2>
        <p>The current: {count}</p>
        <button onClick={decrement}>-</button>{" "}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
