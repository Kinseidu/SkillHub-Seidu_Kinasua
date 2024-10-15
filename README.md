Fetching Data from Public API
This project demonstrates how to fetch data from a public API using both async/await and .then() methods in JavaScript. The responses are filtered to display only five items from the fetched data.

Table of Contents
Installation
Usage
Fetching with Async/Await
Fetching with .then()
Technologies Used
License
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:

bash
Copy code
cd your-repo-name
Open the index.html file in your browser to see the results of the fetch.

Usage
This project fetches data from a public API (e.g., JSONPlaceholder or a news API) and displays the first five items from the response.

Fetching with Async/Await
In this method, the async and await keywords are used to handle asynchronous operations in a synchronous manner.

javascript
Copy code
async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const firstFive = data.slice(0, 5); // Display only the first 5 items
        console.log(firstFive);
    } catch (error) {
        console.error('Error:', error);
    }
}
Fetching with .then()
In this method, the .then() and .catch() methods are used to handle the fetch response.

javascript
Copy code
function fetchDataThen() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const firstFive = data.slice(0, 5); // Display only the first 5 items
            console.log(firstFive);
        })
        .catch(error => console.error('Error:', error));
}
Displaying the Results
Both methods fetch data from a public API and print the first five items in the console.

Technologies Used
HTML
JavaScript (ES6)
Public API (e.g., JSONPlaceholder)