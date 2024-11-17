// // App.jsx
// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import BookList from './BookList.jsx';
// import Cart from './Cart.jsx';

// function App() {
//   const [cart,setCart] = useState([]);
//   const onAddToCart = (book)=>{
//     setCart([...cart,book]);
//     console.log("Added to cart:",book);
    
    
//   }
//    return (
//     <div>
//       <header>
//         <h1>Book Library</h1>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/cart">Cart ({cart.length})</Link>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<BookList onAddToCart={onAddToCart} />} />
//         <Route path="/cart" element={<Cart  cart={cart}/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchCart, addToCart, updateCartItem, removeFromCart } from './api'; // Import API methods
import BookList from './BookList.jsx';
import Cart from './Cart.jsx';
import './App.css'
import './Headerr.jsx'
import img4 from './assets/img4.png'

function App() {
  const [cart, setCart] = useState([]);

  // Load cart data when the app initializes
  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await fetchCart();
        setCart(cartData);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };
    loadCart();
  }, []);

  // Add item to cart
  const handleAddToCart = async (book) => {
    const existingItem = cart.find((item) => item.id === book.id);
    if (existingItem) {
      alert(`The product ${book.title} is already added to cart`)
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      await updateCartItem(existingItem.id, updatedItem);
      setCart(cart.map((item) => (item.id === book.id ? updatedItem : item)));
    } else {
      const newItem = { ...book, quantity: 1 };
      await addToCart(newItem);
      alert("the product is added to cart")
      setCart([...cart, newItem]);
    }

  //   const newItem = { ...book, quantity: 1 };
  //   try {
  //     await addToCart(newItem);
  //     setCart([...cart, newItem]);
  //     // alert(`The product ${book.title} has been added to the cart`);
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //     // alert('Failed to add the product to the cart. Please try again.');
  // }
  
  };



  // Remove item from cart
  const handleRemoveFromCart = async (id) => {
    console.log('Removing cart item with ID:', id); // Debugging
    try {
      await removeFromCart(id); // Call API to remove item
      setCart(cart.filter((item) => item.id !== id)); // Update local state
      alert(`The item has been removed`)
    } catch (error) {
      console.error('Error removing from cart:', error); // Log any error
    }
  };

  // Update cart item quantity
  const handleUpdateCartItem = async (id, quantity) => {
    const updatedItem = cart.find((item) => item.id === id);
    if (updatedItem) {
      const newItem = { ...updatedItem, quantity };
      await updateCartItem(id, newItem);
      setCart(cart.map((item) => (item.id === id ? newItem : item)));
    }
  };

  return (
    
    <>
        
      <header id='nain' style={{backgroundColor:"	#7d2fd0"}}>
        <img id='rff' width={'110px'} height={'100px'} src={img4} alt="" />
        <h1 id='jim'>Libuno <br /> <span id='cv'>The Book Seller</span></h1>
        <nav>
          <Link id='tum' to="/Home">Home</Link>  <Link id='tum1' to="/cart">Cart ({cart.length})</Link>
        </nav>
      </header>
      
   
      

    

      <Routes>
        <Route path="/Home" element={<BookList onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartItem={handleUpdateCartItem}
            />
          }
        />
      </Routes>
    

    </>
    
  );
}

export default App;