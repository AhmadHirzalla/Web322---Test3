// app.js
const express = require('express');
const app = express();
const data = require('./data');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.render('index');
});

// Route to display users
app.get('/user', (req, res) => {
  res.render('user', { users: data.users });
});

// Route to display products
app.get('/products', (req, res) => {
  res.render('products', { products: data.products });
});

// Route to display products with ID greater than 3
app.get('/products/greaterthan3', (req, res) => {
  const filteredProducts = data.products.filter(product => product.PID > 3);
  res.render('products_greaterthan3', { products: filteredProducts });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
    