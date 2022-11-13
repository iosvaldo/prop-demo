import "./App.css";
import Product from "./Product";

function App() {
  return (
    <>
      <Product
        name="item 1"
        description="short decription today"
        price={1500.0}
      />
      <Product name="item 2" description="short decription" price={800.0} />
      <Product name="item 2" description="short decription" price={150.0} />
    </>
  );
}

export default App;
