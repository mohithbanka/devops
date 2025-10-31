const express = require('express');
const app = express();

// Middleware to parse JSON (optional, but useful later)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express Server 🚀');
});

// Example additional routes
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at support@example.com');
});

// Server port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
