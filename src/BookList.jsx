import React, { useState, useEffect } from 'react';
import { fetchBooks } from './api.js'; // Import API method
import BookCard from './Bookcard.jsx';
import Header from './Headerr.jsx';
import Extra from './Extra.jsx'
import Footer from './Footer.jsx'


const BookList = ({ onAddToCart }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading books:', error);
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  return (
   <>
   <Header/>
 
   
      <div className="book-list">
        <div id='fh'>
          {loading ? (
            <p>Loading books...</p>
          ) : books.length > 0 ? (
            books.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
            ))
          ) : (
            <p>No books available.</p>
          )}
        </div>
      </div>
      <Extra/>
      <Footer/>

   </>
  );
};

export default BookList;