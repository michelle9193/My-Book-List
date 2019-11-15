// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '123456'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '789456'
            }
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    // Creating row to put into tbody with id book-list
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        
        // Create table row element tr
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td> 
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        // Append row to list
        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // Prevent actual submit
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instatiate book 
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);
});

// Event: Remove Book