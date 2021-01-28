import React from 'react';
import './Product.css';
import Tilt from 'react-parallax-tilt';
const Product = (props) => {
  return (
    <div className="Product">
      <Tilt>
        <div className="Product__img">
          <img alt={props.name} src={props.img} />
        </div>
        <h1 className="Product__title">{props.name}</h1>
        <h2 className="Product__brand">{props.brand}</h2>
        <div className="Product__description">
          <ul>
            <li>Price: {props.price}</li>
            <li>RAM: {props.ram}</li>
            <li>ROM: {props.rom}</li>
          </ul>
        </div>
      </Tilt>
    </div>
  );
};

export default Product;
