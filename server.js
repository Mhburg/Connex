// Import required modules
// TODO: Add more modules
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const cors = require('cors');

// Create an Express application instance
const app = express();
// Set the port for the server
const PORT = process.env.PORT || 80; // Use PORT from environment variable or default to 3001

// TODO: add stuff here

app.use(cors());
// Middleware to parse incoming request bodies in JSON format
app.use(express.json());
// Middleware to parse URL-encoded data with extended options
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use('/', routes);

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
