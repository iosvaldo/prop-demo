import React from "react";
import ItemDescription from "./ItemDescription";
import ItemDescrip from './ItemDescription.css'

function Product({ name, description, price }) {
  return (
    <div className="item__description">
      <ItemDescription 
      name={name} 
      description={description} />
      <h2>${price}</h2>
    </div>
  );
}

export default Product;
