// // Activity 1 Object Creation and Access

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}
console.log(book);
// Access and log the title and author properties of the book object
console.log(book.title);
console.log(book['author']);

// // Activity 2 Object Methods

const books = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    getBookInfo: function() {
      return `${this.title} by ${this.author} (${this.year})`;
    }
  };
  
  console.log(books.getBookInfo()); 

  let bookss = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    getBookInfo: function() {
      return `${this.title} by ${this.author} (${this.year})`;
    },
    setYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  bookss.setYear(2005);
  console.log(bookss.getBookInfo());
  

//   // Activity 3  Nested Object
  let library = {
    name: 'Oxford',
    books: [
      { title: 'Ek Samandar, Mere Andar', author: 'Sanjeev Joshi', year: 2024 },
      { title: 'Four Stars of Destiny', author: 'General Manoj Mukund Naravane', year: 2024 },
      { title: 'Sanskriti ke Ayaam', author: 'Manorama Mishra', year: 2024 }
    ],
  }

  console.log(library);

//   Access and log the name of the library and the titles of all the books
console.log(library.name);
for (let index = 0; index < library.books.length; index++) {
    console.log(library.books[index].title);
    
}

// // Activity 4  This Keyword

let libraries = {
    name: "My Library",
    books: [
      { title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954,
        getBookInfo: function() {
          return `${this.title} (${this.year})`;
        }
      },
      { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979,
        getBookInfo: function() {
          return `${this.title} (${this.year})`;
        }
      },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960,
        getBookInfo: function() {
          return `${this.title} (${this.year})`;
        }
      }
    ]
  };
  
  for (let i = 0; i < libraries.books.length; i++) {
    console.log(libraries.books[i].getBookInfo());
  }

// //   Activity

// const book = {
//     title: "The Lord of the Rings",
//     author: "J. R. R. Tolkien",
//     year: 1954
//   };
  
//   for (const property in book) {
//     console.log(`${property}: ${book[property]}`);
//   }
  
  