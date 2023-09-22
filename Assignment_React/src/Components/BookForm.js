import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      author: '',
      publication: '',
      price: '',
      books: [],
      errors: {
        bookName: '',
        author: '',
        publication: '',
        price: '',
      },
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
      errors: {
        ...this.state.errors,
        [id]: value === '' ? 'This field is required.' : '',
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { bookName, author, publication, price } = this.state;

    // Check if any field is blank
    if (bookName === '' || author === '' || publication === '' || price === '') {
      alert('All fields are required.');
      return;
    }

    // Create a new book object
    const newBook = {
      bookName,
      author,
      publication,
      price,
    };

    // Add the new book to the list
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
      bookName: '',
      author: '',
      publication: '',
      price: '',
    }));
  };

  render() {
    const { bookName, author, publication, price, books, errors } = this.state;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3" style={{ fontSize: '24px' }}>
              Add a Book
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="bookName">Name of the book:</label>
                <input
                  type="text"
                  className={`form-control ${errors.bookName ? 'is-invalid' : ''}`}
                  id="bookName"
                  value={bookName}
                  onChange={this.handleChange}
                  required
                />
                {errors.bookName && <div className="invalid-feedback">{errors.bookName}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                  id="author"
                  value={author}
                  onChange={this.handleChange}
                  required
                />
                {errors.author && <div className="invalid-feedback">{errors.author}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="publication">Publication:</label>
                <input
                  type="text"
                  className={`form-control ${errors.publication ? 'is-invalid' : ''}`}
                  id="publication"
                  value={publication}
                  onChange={this.handleChange}
                  required
                />
                {errors.publication && <div className="invalid-feedback">{errors.publication}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                  id="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                />
                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
              </div>
              <button type="submit" className="btn btn-primary">
                Add A Book
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Book List</h2>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Name of the book</th>
                  <th>Author</th>
                  <th>Publication</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>
                    <td>{book.publication}</td>
                    <td>{book.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BookForm;