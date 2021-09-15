import React, { useContext } from "react"
import BookContext from "../context/BooksContext"
import _ from 'lodash'
import Book from "./Book"

const BookList = () => {
    const {books, setBooks} = useContext(BookContext)
    const handleRemoveBook = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }


    return (
        <>
            <div className="book-list">
                { !_.isEmpty(books) ? (
                    books.map((book) => (
                        <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook}/>
                    ))
                ) : (
                    <p className="message">No books available. Please add some books.</p>
                )}
            </div>
        </>
    )
}

export default BookList