const asyncList = document.getElementById('async-data');
const thenList = document.getElementById('then-data');

// Function to display the first 5 items from the fetched data
function displayData(data, element) {
    data.slice(0, 5).forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${item.id}, Title: ${item.title}`;
        element.appendChild(listItem);
    });
}

// 1. Fetch data using async/await
async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayData(data, asyncList); // Display first 5 items
    } catch (error) {
        console.error('Error fetching data with async/await:', error);
    }
}

// 2. Fetch data using fetch().then()
function fetchDataWithThen() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            displayData(data, thenList); // Display first 5 items
        })
        .catch(error => {
            console.error('Error fetching data with fetch().then():', error);
        });
}

// Call both functions to fetch and display data
fetchDataWithAsyncAwait();
fetchDataWithThen();
