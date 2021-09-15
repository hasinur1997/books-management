import React, { useContext, useState } from 'react'
import BookContext from '../context/BooksContext'
import BookForm from './BookForm'
import { useHistory } from 'react-router-dom'

const AddBook = () => {
    let history = useHistory()
    const {books, setBooks} = useContext(BookContext)
    const [isAdded, setAdded] = useState(false)


    const handleOnSubmit = (book) => {

        setBooks([book, ...books])
        setAdded(true)
    }

    return (
        <>
            {
                isAdded && (
                    <p className="message">Book has been added</p>
                )
            }
            <BookForm handleOnSubmit={handleOnSubmit}/>
        </>
    )
}

export default AddBook