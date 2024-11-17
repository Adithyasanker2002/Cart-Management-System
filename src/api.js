import axios from 'axios';


const BASE_URL = 'https://cart-server-misr.onrender.com';

// Fetch books from JSON server
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Fetch cart items from JSON server
export const fetchCart = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

// Add a book to the cart
export const addToCart = async (book) => {
  try {
    const response = await axios.post(`${BASE_URL}/cart`, book);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Update a cart item (e.g., quantity)
export const updateCartItem = async (id2, updatedItem) => {
  try {
    const response = await axios.put(`${BASE_URL}/cart/${id2}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

// Remove a book from the cart
export const removeFromCart = async (id1) => {
  try {
    const response=await axios.delete(`${BASE_URL}/cart/${id1}`,{});
    return response.data
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};