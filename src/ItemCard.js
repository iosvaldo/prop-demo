import React from "react";
import MainBtn from "./MainBtn";

function ItemCard({
  name,
  image = "https://acuranavi.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png",
  features,
  isSold
}) {

  const featureList = features.map((item) => <li>{item}</li>)
    
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {isSold ? null : <MainBtn label="For sale"/>}
      <h3> Top Features
        <ul>{featureList}</ul>
      </h3>
    </div>
  );
}

export default ItemCard;
