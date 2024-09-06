// API URL
const apiUrl = 'https://api.scryfall.com/cards/random';

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        // Update HTML with the API Data
       
        document.getElementById('api-data').innerHTML = JSON.stringify([data.name,data.image_uris.large], null, 2);
        document.getElementById('api-data').innerHTML = `
        <h2> Scryfall API Card </h2>
        <img src=${data.image_uris.large} class=r_picture>
        `
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch data when the page loads
fetchData();