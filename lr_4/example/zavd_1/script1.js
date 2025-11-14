// 1
let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
    },
    markAsRead() {
        this.isRead = true;
    }
};

book.isRead = !book.isRead;
book.markAsRead();
book.bookInfo();



// 2
let library = [
    {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true},
    {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false},
    {title: "1984", author: "George Orwell", year: 1949, isRead: false}
];

function displayLibrary() {
    library.forEach(book => {
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`)
    })
}

displayLibrary();

library.push({title: "The Great Gatsby", author: "F. Scott Fitzegerald", year: 1925, isRead: false});
displayLibrary();


// 3
library.sort((a, b) => a.year - b.year);
console.log("Відсортрвані книги за роком видання:", library)

let unreadBooks = library.filter(book => !book.isRead)
console.log("Непрочитані книги:", unreadBooks)

let talkienBook = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книга Толкіна:", talkienBook)

// 4
function addBookLibrary() {
    let title = prompt("Введіть назву книги:");
    let author = prompt("Введіть автора книги:");
    let year = prompt("Введіть рік видання книги:");
    let isRead = prompt("Чи прочитана книга:");

    library.push({title, author, year, isRead})
    displayLibrary();
}
addBookLibrary();

function calculateAverageYear() {
    let totalYears = library.reduce((sum, book) => sum + book.year, 0)
    return totalYears / library.length
}
console.log(calculateAverageYear());