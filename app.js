// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// US constructor 
function UI() { }

// Add to table list 
UI.prototype.addBookToList = function (book) {
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

UI.prototype.showAlert = function(message, className){
  // create ui div element 
  const div = document.createElement('div');
  // Add class name 
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  // get parrent div 
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form'); 
  // Insert Alert 
  container.insertBefore(div, form);
  // set timeout after 3 s 
  // setTimeout(function() {
  //   document.querySelector('.alert').remove();
  // }, 3000);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

UI.prototype.deleteBook = function(target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function () {
  const title = document.getElementById('title').value = '',
    author = document.getElementById('author').value = '',
    isbn = document.getElementById('isbn').value = '';
}

// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // GEt form values 
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instanciate book 
  const book = new Book(title, author, isbn);

  // Instanciate
  const ui = new UI();

  // Validate 
  if (title === '' || author === '' || isbn === '') {
    // Error alert 
    ui.showAlert('All fields are required', 'error');
  } else {
    // Add book to table list using prototype
    ui.addBookToList(book);
    // Success alert 
    ui.showAlert('Book added successfully', 'success');
    // clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e) {
  // Instanciate
  const ui = new UI();
  // delete book 
  ui.deleteBook(e.target);
  // Show message 
  ui.showAlert('Book deleted successfully', 'success');
})