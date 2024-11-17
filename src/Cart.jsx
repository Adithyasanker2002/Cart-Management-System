import React from 'react';
import './App.css'
import Footer from './Footer';
import Extra from './Extra';
const Cart = ({ cart, onRemoveFromCart, onUpdateCartItem }) => {
  return (
   <>
   <div id='fd'><h1 id='fd1' >Your Cart</h1></div>
      <div id='fh'>
        <div id='fh' >
          {/* <h2>Your Cart</h2> */}
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id}  className="book-card">
                <img width={'100%'} height={'250px'} src={item.coverImageUrl} alt={item.title}  />
                <div>
                  <h4 id='muth'>{item.title}</h4>
                  <p id='muth1'>{item.author}</p>
                  <p>{item.price}</p>
                  <input id='hi'
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => onUpdateCartItem(item.id, parseInt(e.target.value))}
                  />
                  <button id='muth3' onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                  <p id='hi1'>Quantity: <span id='hi3'>{item.quantity}</span></p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <Extra/>
      <Footer/>
   </>
  );
};

export default Cart;