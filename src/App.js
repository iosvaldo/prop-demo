import "./App.css";
import Product from "./Product";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="app">
      <h1>Product Category Title</h1>
      <Product
        name="item 1"
        description="short decription"
        price={1500.0}
      />
      <Product name="item 2" description="short decription" price={800.0} />
      <Product name="item 2" description="short decription" price={150.0} />
      
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
