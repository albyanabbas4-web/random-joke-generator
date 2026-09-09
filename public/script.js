// DOM Elements
const randomBtn = document.getElementById('randomBtn');
const categoryBtn = document.getElementById('categoryBtn');
const categorySelect = document.getElementById('categorySelect');
const jokeContainer = document.getElementById('jokeContainer');
const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');
const jokeTypeEl = document.getElementById('jokeType');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const jokeCountEl = document.getElementById('jokeCount');

let jokeCount = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
});

// Event Listeners
randomBtn.addEventListener('click', getRandomJoke);
categoryBtn.addEventListener('click', getJokeByCategory);

// Fetch random joke
async function getRandomJoke() {
    try {
        showLoading();
        hideError();
        
        const response = await fetch('/api/joke');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const joke = await response.json();
        displayJoke(joke);
        jokeCount++;
        updateJokeCount();
    } catch (error) {
        console.error('Error fetching joke:', error);
        showError('Failed to fetch joke. Please try again.');
    } finally {
        hideLoading();
    }
}

// Fetch joke by category
async function getJokeByCategory() {
    const category = categorySelect.value;
    
    if (!category) {
        showError('Please select a category.');
        return;
    }
    
    try {
        showLoading();
        hideError();
        
        const response = await fetch(`/api/joke/category/${category}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const joke = await response.json();
        displayJoke(joke);
        jokeCount++;
        updateJokeCount();
    } catch (error) {
        console.error('Error fetching joke:', error);
        showError(`Failed to fetch ${category} joke. Please try again.`);
    } finally {
        hideLoading();
    }
}

// Load categories
async function loadCategories() {
    try {
        const response = await fetch('/api/categories');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const categories = await response.json();
        populateCategories(categories);
    } catch (error) {
        console.error('Error loading categories:', error);
        // Fallback categories if API fails
        const fallbackCategories = ['general', 'programming', 'knock-knock'];
        populateCategories(fallbackCategories);
    }
}

// Populate category dropdown
function populateCategories(categories) {
    categorySelect.innerHTML = '<option value="">Select a category...</option>';
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });
}

// Display joke
function displayJoke(joke) {
    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.punchline;
    jokeTypeEl.textContent = joke.type.toUpperCase();
    jokeContainer.classList.remove('hidden');
}

// Update joke counter
function updateJokeCount() {
    jokeCountEl.textContent = jokeCount;
}

// Show loading spinner
function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

// Hide loading spinner
function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// Hide error message
function hideError() {
    errorMessage.classList.add('hidden');
}
