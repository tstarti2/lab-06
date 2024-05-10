// Project: CIT 281 Lab 6
// Author: tstarti2

// create a Book class
class Book {
  constructor (title, author, pubDate, isbn) {
    this.title = title
    this.author = author
    this.pubDate = pubDate
    this.isbn = isbn
  }
}

class Library {
  constructor (name) {
    this._name = name
    this._books = []
  }

  get books () {
    return JSON.parse(JSON.stringify(this._books))
  }

  get count () {
    return this._books.length
  }

  addBook (book = {}) {
    const { title = '', author = '', pubDate = '', isbn = 'isbn' } = book
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn }
      this._books.push(newBook)
    }
  }

  listBooks () {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
    }
  }
}

// test library class
const library = new Library('New york Times Best Seller List');

// create a books
const atomicHabits = new Book('Atomic Habits', 'James Clear', '10/16/2018', '0735211299');
const kingOfSloth = new Book('King of Sloth', 'Ana Huang', '02/05/2024', '1728289750');
const funnyStory = new Book('Funny Story', 'Emily Henry', '03/15/2024', '0593441281'); 
// add book to library and show library contents
library.addBook(atomicHabits);
library.addBook(kingOfSloth);
library.addBook(funnyStory);
console.log(`Book Count: ${library.count}`);
library.listBooks();
