function Book(title, author, year, blurb, genres, audioduration) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.blurb = blurb;
    this.genres = genres;
    this.audioduration = audioduration;
    this.printout = function () {
        console.log(`This book is ${this.title} by ${this.author} from ${this.year}. It's genre is ${this.genres} and it's audio duration is ${this.audioduration}.`);
    }
}

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

        book1.printout(); // Output details of book1
        book2.printout(); // Output details of book2
    })
    .catch(error => console.error('Error loading the file', error));
