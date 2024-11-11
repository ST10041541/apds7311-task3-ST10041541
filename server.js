// Import necessary modules
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // If you're handling request bodies
const cors = require('cors'); // If you need Cross-Origin Resource Sharing

// Initialize the Express app
const app = express();

// Use middlewares
app.use(cors()); // Enable CORS if necessary
app.use(bodyParser.json()); // Parse incoming JSON requests

// Serve static files (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes (modify as per your application)
app.get('/', (req, res) => {
  res.send('Welcome to the Employee Payments Portal API!');
});

// Example route for testing the API
app.get('/test', (req, res) => {
  res.json({ message: 'This is a test route!' });
});

// Read SSL certificate and key files
const privateKey = fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create an HTTPS server
const server = https.createServer(credentials, app);

// Define the port you want to listen on (443 for HTTPS)
const port = 443;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running securely on https://localhost:${port}`);
});

// Optional: Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
