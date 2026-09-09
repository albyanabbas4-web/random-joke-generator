const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get a random joke
app.get('/api/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = {
      setup: response.data.setup,
      punchline: response.data.punchline,
      type: response.data.type
    };
    res.json(joke);
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    res.status(500).json({
      error: 'Failed to fetch joke',
      message: error.message
    });
  }
});

// API endpoint to get jokes by category
app.get('/api/joke/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/${category}/random`);
    
    let joke;
    if (Array.isArray(response.data)) {
      joke = {
        setup: response.data[0].setup,
        punchline: response.data[0].punchline,
        type: response.data[0].type
      };
    } else {
      joke = {
        setup: response.data.setup,
        punchline: response.data.punchline,
        type: response.data.type
      };
    }
    res.json(joke);
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    res.status(500).json({
      error: 'Failed to fetch joke for this category',
      message: error.message
    });
  }
});

// API endpoint to get available categories
app.get('/api/categories', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/types');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).json({
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
