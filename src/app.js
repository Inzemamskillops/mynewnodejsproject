const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', app: 'mynewnodejsproject' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
