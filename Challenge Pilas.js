class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    toString() {
        return `Book(Name: ${this.name}, ISBN: ${this.isbn}, Author: ${this.author}, Editorial: ${this.editorial})`;
    }
}

class BookStack {
    constructor() {
        this.stack = [];
    }

    
    push(book) {
        this.stack.push(book);
        console.log(`Added "${book.name}" to the stack.`);
    }

   
    pop() {
        if (this.stack.length > 0) {
            const book = this.stack.pop();
            console.log(`Removed "${book.name}" from the stack.`);
            return book;
        } else {
            console.log("The stack is empty!");
            return null;
        }
    }

    peek() {
        if (this.stack.length > 0) {
            const book = this.stack[this.stack.length - 1];
            console.log(`Top book: "${book.name}"`);
            return book;
        } else {
            console.log("The stack is empty!");
            return null;
        }
    }

    
    isEmpty() {
        return this.stack.length === 0;
    }

    
    size() {
        return this.stack.length;
    }

    display() {
        console.log("Current stack of books:");
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i].toString());
        }
    }
}

// Ejemplos de uso
const stack = new BookStack();

const book1 = new Book("1984", "9780451524935", "George Orwell", "Signet Classics");
const book2 = new Book("El extraño mundo de jack", "9780061120084", "Harper Lee", "Harper Perennial Modern Classics");
const book3 = new Book("Yo robot", "9780743273565", "F. Scott Fitzgerald", "Scribner");
const book4 = new Book("Rey leon","9780451333935","Nicolas Cuellar","Enlace");

stack.push(book1);
stack.push(book2);
stack.push(book3);
stack.push(book4);

stack.display();

stack.peek();

stack.pop();
stack.pop();


stack.display();

console.log(`Is stack empty? ${stack.isEmpty()}`);

stack.pop();
console.log(`Is stack empty? ${stack.isEmpty()}`);
