import React, { useContext, useState } from 'react'
import BookContext from '../context/BooksContext'
import BookForm from './BookForm'
import { useParams, useHistory } from 'react-router-dom'

const EditBook = ({history}) => {
    const {books, setBooks} = useContext(BookContext)
    const {id} = useParams()
    const bookToEdit = books.find((book) => book.id === id)
    const [isUpdated, setUpdated] = useState(false)
    

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book) => book.id !== id)
        setBooks([book, ...filteredBooks])
        setUpdated(true)
    }

    return (
        <div>
            {
                isUpdated && (
                    <p className="message">Your book has been updated</p>
                )
            }
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit}/>
        </div>
    )
}

export default EditBook