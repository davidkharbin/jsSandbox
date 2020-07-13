
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

//getAge
Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

// Revise / Change year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

const book1 = new Book('Book One', 'John Doe', '2013');

const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);
book2.revise('2018');
console.log(book2);



// https://youtu.be/vDJpGenyHaA?t=1034
//Why create a prototype instead of just having the function inside
//the object literal? (why store the function in the prototype, rather than
//in the object itself?)
// --- Because the every book object needs a title/auth/year, but not
//     every book needs a summary or 'age', etc.