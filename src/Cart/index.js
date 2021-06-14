import React from 'react';
import '../Home/Home.css';
import Product from '../Product/Product';

const Cart = ({ addCart, setaddCart }) => {
  const onRemove = (item) => {
    setaddCart(() => addCart.filter((cartItems) => cartItems.id !== item.id));
  };
  const getPrice = () => {
    return addCart?.reduce(
      (prevPrice, cartItems) =>
        Math.round((prevPrice + cartItems.price) * 100) / 100,
      0
    );
  };

  const clearCart = () => {
    setaddCart([]);
  };

  return (
    <>
      <div className="Search">Total Price: {getPrice()}</div>
      <button className="Clear-cart" onClick={clearCart}>
        Clear Cart
      </button>
      <div className="Home">
        {addCart.length > 0 ? (
          addCart.map((item) => (
            <Product
              cart
              key={item.id}
              item={item}
              addCart={addCart}
              onClick={() => setaddCart(() => [...addCart, item])}
              onRemove={() => onRemove(item)}
            />
          ))
        ) : (
          <p>Add some items in the cart</p>
        )}
      </div>
    </>
  );
};

export default Cart;
