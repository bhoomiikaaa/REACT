// src/BookInfo.js
import React from 'react';


function BookInfo({ books }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Author</th>
          <th>Publication Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.publicationDate}</td>
            <td>{book.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookInfo;
