// Fetch the JSON file
fetch('readBooks.json')
    .then(response => response.json())
    .then(data => {
        const book1Data = data[0].Animal_Farm;
        const book2Data = data[1].Brave_New_World;

        const book1 = new Book(
            book1Data.title,
            book1Data.author,
            book1Data.year,
            book1Data.blurb,
            book1Data.genres.join(", "), // Join genres array into a string
            book1Data.audioduration
        );

        const book2 = new Book(
            book2Data.title,
            book2Data.author,
            book2Data.year,
            book2Data.blurb,
            book2Data.genres.join(", "), // Join genres array into a string
            book2Data.audioduration
        );

        const book1Div = document.getElementById('book1');
        const book2Div = document.getElementById('book2');

        // Display details of book1
        const book1Details = document.createElement('p');
        book1Details.textContent = `Book 1: ${book1.title} by ${book1.author}, ${book1.year}`;
        book1Div.appendChild(book1Details);

        // Display details of book2
        const book2Details = document.createElement('p');
        book2Details.textContent = `Book 2: ${book2.title} by ${book2.author}, ${book2.year}`;
        book2Div.appendChild(book2Details);
    })
    .catch(error => console.error('Error loading the file', error));
