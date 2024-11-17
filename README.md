# E-Commerce Cart Management System  

An interactive e-commerce cart management system built with *React* and a *JSON server* to handle API operations like adding, updating, and removing items in a shopping cart.  

## Features  
- 🛒 *Add to Cart*: Add products to the cart with real-time alerts for successful addition or duplicate entries.  
- 🔄 *Update Cart Quantity*: Modify the quantity of items in the cart seamlessly.  
- ❌ *Remove from Cart*: Delete items from the cart with a confirmation alert.  
- 💾 *Persistent Data*: Cart data is stored on a server and retrieved via API calls, ensuring it remains consistent across sessions (data lost only on server restart).  
- ⚡ *Error Handling*: Displays meaningful alerts for any API or data errors.  

## Demo  
- *Home Page*: Browse available products and add them to the cart.  
- *Cart Page*: View and manage items in the cart, including updating quantities and removing products.  

## Tech Stack  
- *Frontend*: React, React Router, Axios  
- *Backend*: JSON Server (mock backend)  
- *Styling*: CSS  

## Installation  

### Prerequisites  
- Node.js  
- npm  

### Steps  
1. Clone this repository:  
   bash  
   git clone https://github.com/your-repo/ecommerce-cart.git  
   cd ecommerce-cart  
     
2. Install dependencies:  
   bash  
   npm install  
     
3. Start the JSON server:  
   bash  
   npx json-server --watch db.json --port 3001  
     
4. Run the React app:  
   bash  
   npm start  
     
5. Access the app at http://localhost:3000.  

## API Endpoints  
- *GET /books*: Fetch available products.  
- *GET /cart*: Fetch cart items.  
- *POST /cart*: Add a new item to the cart.  
- *PUT /cart/:id*: Update an existing cart item.  
- *DELETE /cart/:id*: Remove an item from the cart.  

## Project Structure  
plaintext  
src/  
├── components/  
│   ├── Header.jsx          // Navbar with cart count  
│   ├── BookList.jsx        // Displays available books  
│   ├── BookCard.jsx        // Card component for a single book  
│   ├── Cart.jsx            // Cart page to manage cart items  
├── api.js                  // Handles API calls  
├── App.jsx                 // Main app component with routes  
├── index.css               // Styling  
└── index.js                // Entry point  
  

## Future Enhancements  
- Add user authentication for personalized cart experiences.  
- Implement a database-backed server (e.g., MongoDB or PostgreSQL) for persistent data storage.  
- Enhance UI/UX with advanced styling frameworks like Material-UI or Tailwind CSS.  

## License  
This project is open-source and available under the MIT License.  

Feel free to contribute, fork, or create issues for improvements. Happy coding! 🚀
