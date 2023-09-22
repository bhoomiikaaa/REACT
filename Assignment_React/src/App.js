import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '', publicationDate: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    const { title, author, genre, publicationDate } = newBook;
    if (title && author && genre && publicationDate) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', genre: '', publicationDate: '' });
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Book List</h1>
      <div className="row justify-content-center mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control mb-2"
            name="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="genre"
            placeholder="Genre"
            value={newBook.genre}
            onChange={handleInputChange}
          />
          <input
            type="date"
            className="form-control mb-2"
            name="publicationDate"
            value={newBook.publicationDate}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-block" onClick={handleAddBook}>
            Add A Book
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Publication Date</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.publicationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
