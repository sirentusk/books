fetch('readBooks.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Check if data is loaded correctly

        const book1Data = data[0].Animal_Farm;
        const book2Data = data[1].Brave_New_World;

        console.log(book1Data, book2Data); // Check if book data is extracted correctly

        // Test if the divs are being selected correctly
        const book1Div = document.getElementById('book1');
        const book2Div = document.getElementById('book2');
        console.log(book1Div, book2Div); 

        // Display a test message in the divs
        book1Div.textContent = "Book 1 content";
        book2Div.textContent = "Book 2 content";
    })
    .catch(error => console.error('Error loading the file', error));
