// Fetch the JSON file
fetch('readBooks.json')
    .then(response => response.json())
    .then(data => {
        // Handle the loaded JSON data
        console.log(data); // You can do something with the data here
        document.getElementById('output').innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error loading the file', error));
