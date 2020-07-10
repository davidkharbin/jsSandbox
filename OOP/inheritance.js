//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary proto
Book.prototype.getSummary = function(){
 return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magazine Constructor 
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}


// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use magazine constructor
Magazine.prototype.constructor = Magazine;



console.log(mag1);