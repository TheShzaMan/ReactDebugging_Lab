import React from "react";

// This component is responsible for rendering the properties of a single book object.
// How can you give BookRow access to a book object?

const BookRow = ({ book }) => {
	// const book = books.map((book) => (

	return (
		<tr key={book.id}>
			<td>{book.title}</td>
			<td>{book.author}</td>
			<td>{book.datePublished}</td>
			<td>{book.pages}</td>
		</tr>
	);
	// console.log(`book: ${book}`);
	// return <tr>{book}</tr>;
};

export default BookRow;
