import React from 'react';
import './App.css'


const BookCard = ({ book, onAddToCart }) => {
 
  return (
  <>

     <div id='js'>
        <div className="book-card">
          <img width={'100%'} height={'350px'} src={book.coverImageUrl} alt={book.title} />
          <h2 id='muth'>{book.title}</h2>
          <p id='les'>By</p>
          <p id='muth1'>{book.author}</p>
          {/* <p id='muth2'>{book.description}</p> */}
          <button id='muth3' onClick={() => onAddToCart(book)}>Add to Cart</button>
        </div>
     </div>
    
    
  </>
 
  );
};

export default BookCard;