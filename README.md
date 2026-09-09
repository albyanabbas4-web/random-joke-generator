# Random Joke Generator

A fun web application that fetches random jokes from a public API using Node.js, Express, and vanilla JavaScript.

## Features

✨ **Get Random Jokes** - Click a button to fetch a random joke

🎯 **Category Selection** - Choose jokes by category (general, programming, knock-knock, etc.)

⚡ **Real-time Loading** - Visual loading spinner while fetching

📊 **Joke Counter** - Track how many jokes you've viewed

🎨 **Beautiful UI** - Modern, responsive design that works on all devices

⚠️ **Error Handling** - Graceful error messages if something goes wrong

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **External API:** [Official Joke API](https://official-joke-api.appspot.com/)
- **Dependencies:** axios, cors

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository:**
```bash
git clone https://github.com/albyanabbas4-web/random-joke-generator.git
cd random-joke-generator
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
# Production mode
npm start

# Development mode (with auto-reload)
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:3000` in your web browser

## Usage

### Get a Random Joke
1. Click the **"Get Random Joke"** button
2. The setup and punchline will appear below
3. The joke type (category) will be displayed

### Get a Joke by Category
1. Select a category from the dropdown menu
2. Click the **"Get Joke"** button
3. A joke from that category will be displayed

## API Endpoints

### GET `/api/joke`
Fetches a random joke from any category.

**Response:**
```json
{
  "setup": "Why did the developer go broke?",
  "punchline": "Because he lost his cache!",
  "type": "programming"
}
```

### GET `/api/joke/category/:category`
Fetches a random joke from a specific category.

**Parameters:**
- `category` (string) - The joke category (e.g., 'general', 'programming')

**Response:**
```json
{
  "setup": "What did the programmer say?",
  "punchline": "Have you tried turning it off and on again?",
  "type": "programming"
}
```

### GET `/api/categories`
Gets all available joke categories.

**Response:**
```json
["general", "programming", "knock-knock"]
```

## Project Structure

```
random-joke-generator/
├── server.js           # Express server and API routes
├── package.json        # Project dependencies
├── README.md          # This file
├── .gitignore         # Git ignore rules
└── public/
    ├── index.html     # Main HTML file
    ├── style.css      # Styles
    └── script.js      # Frontend JavaScript
```

## Error Handling

The application includes robust error handling:
- Network errors are caught and user-friendly messages are displayed
- Invalid API responses are handled gracefully
- Fallback categories are provided if the category API fails
- Server errors return informative JSON responses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add joke favorites/bookmarking feature
- [ ] Implement joke search functionality
- [ ] Add share to social media buttons
- [ ] Create a dark mode theme
- [ ] Add multiple joke API sources
- [ ] Implement joke history
- [ ] Add joke difficulty ratings

## External API

This project uses the [Official Joke API](https://official-joke-api.appspot.com/), which is free and requires no API key.

**API Documentation:** https://official-joke-api.appspot.com/

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ by [Your Name]**
