import React from "react";

const Cart = (props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={props.onClear}>Clear</button>
    </>
  );
};

export default Cart;
