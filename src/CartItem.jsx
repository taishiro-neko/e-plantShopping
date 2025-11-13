import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
   let total = 0;
   cart.forEach( (item) => {
     let quantity = item.quantity;
     let cost = item.cost;
     total += parseFloat(cost.substring(1))*quantity;
   });
   return total;
  };

  const handleContinueShopping = (e) => {
   return onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert("Checkout coming soon!\nin your dreams...");
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else dispatch(removeItem({ name: item.name }));
  };

  const handleRemove = (item) => {
    console.log("***** Handle remove: name=" + item.name);
    dispatch(removeItem({ name: item.name }));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
     let total = parseFloat(item.cost.substring(1))*item.quantity;
     return total;
  };

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <div className="cart-container">
      <h2 classname="cart-title">
        Total Cart Amount ({itemCount} {itemCount === 1 ? 'item' : 'items'}): ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.map(item => {
          const imgSrc = new URL(`./assets/${item.image}`, import.meta.url).href;
          return (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={imgSrc} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        );
        })}
      </div>
      <div className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


