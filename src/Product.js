import React from "react";
import ItemDescription from "./ItemDescription";

function Product({ name, description, price }) {
  return (
    <div>
      <ItemDescription name={name} description={description} />
      <h2>${price}</h2>
    </div>
  );
}

export default Product;
