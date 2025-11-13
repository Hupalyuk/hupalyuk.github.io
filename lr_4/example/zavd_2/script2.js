let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
    }
};

book.isRead = !book.isRead;
book.bookInfo();

let library = [
    {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true},
    {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false},
    {title: "1984", author: "George Orwell", year: 1949, isRead: false}
];

function displayLibrary() {
    library.forEach
}