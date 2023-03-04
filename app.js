// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// US constructor 
function UI() {}

// Add to table list 
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  // Create table row element
  const row = document.createElement('tr');

  // create inner col 
  row.innerHTML =
    `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  const title = document.getElementById('title').value = '',
        author = document.getElementById('author').value = '',  
        isbn = document.getElementById('isbn').value = '';
}

// Event listener
document.getElementById('book-form').addEventListener('submit', function(e){
  // GEt form values 
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,  
        isbn = document.getElementById('isbn').value;
  
  // Instanciate book 
  const book = new Book(title, author, isbn);

  // Instanciate
  const ui = new UI();
  
  // Add book to table list using prototype
  ui.addBookToList(book);

  // clear Fields
  ui.clearFields();
  
  e.preventDefault();
});