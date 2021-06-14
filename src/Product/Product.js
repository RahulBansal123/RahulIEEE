import React from 'react';
import './Product.css';

const Product = ({ item, onClick, addCart, cart, onRemove }) => {
  const isAdded = addCart.map((items) => items.id === item.id);
  return (
    <div className="Product">
      <div className="Product__add">
        {!cart && (
          <button onClick={isAdded.includes(true) ? onRemove : onClick}>
            {isAdded.includes(true) ? 'Remove From Cart' : 'Add To Cart'}
          </button>
        )}
      </div>
      <div className="Product__img">
        <img alt={item.title} src={item.image} />
      </div>
      <h2 className="Product__title">
        {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
      </h2>
      <h2 className="Product__brand">
        {item.description.length > 100
          ? `${item.description.slice(0, 100)}...`
          : item.description}
      </h2>
      <div className="Product__description">
        <ul>
          <li>Price: {item.price}</li>
          <li>Category: {item.category}</li>
        </ul>
      </div>
      {cart && (
        <div className="Product__add">
          <button onClick={onRemove}>Remove From Cart</button>
        </div>
      )}
    </div>
  );
};

export default Product;
