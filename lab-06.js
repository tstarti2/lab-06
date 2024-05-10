// Project: CIT 281 Lab 6
// Author: Tyler Startin

// create a Book class
class Book {
  constructor (title, author, pubDate) {
    this.title = title
    this.author = author
    this.pubDate = pubDate
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
    const { title = '', author = '', pubDate = '' } = book
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate }
      this._books.push(newBook)
    }
  }

  listBooks () {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}`)
    }
  }
}

// test library class
const library = new Library('New york Times Best Seller List')

// create a book
const atomicHabits = new Book('Atomic Habits', 'James Clear', '10/16/2018')

// add book to library and show library contents
library.addBook(atomicHabits)
console.log(`Book Count: ${library.count}`)
library.listBooks()
