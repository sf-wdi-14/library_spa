// Namespace
var Library = {}

// Fetch all books
Library.loadBooks = function() { // Fetch all the books
  $.get("/books").done(function(books){
    Library.appendBooks(books); //Appends the books
  });
}


Library.appendBooks = function(books) {
  var ul = $("<ul>").attr("id", "book-ul");
  //Iterate through all the books
  books.forEach(function(book){
    var li = $("<li>").text(book.title + " by " + book.author);
    var deleteBtn = $("<button>").text("X").attr("onclick", "Library.deleteBook(event)");
    li.append(deleteBtn);
    ul.append(li);
  });
  $("#container").append(ul);
}

// Add a book
Library.addBook = function() {
}

// Delete a book
Library.deleteBook = function(event) {
}
