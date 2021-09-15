import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const Book = ({
    id,
    bookname,
    author,
    price,
    quantity,
    date,
    handleRemoveBook
}) => {
    const history = useHistory()

    return (
        <Card style={{ width: '18rem' }} className='book'>
            <Card.Body>
                <Card.Title className="book-title">{bookname}</Card.Title>
                <div className="book-details">
                    <div>Author: {author}</div>
                    <div>Quantity: {quantity}</div>
                    <div>Price: {price}</div>
                    <div>Date: {date}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>
                <Button variant="danger" onClick={() => handleRemoveBook(id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default Book