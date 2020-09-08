import React from 'react'
import { Link } from 'react-router-dom'
// import Book from './Book'

const BookListItem = (props) => {
    return (
        <div>
            Book component
            {/* <h3><Link to={`books/${props.book.id}`}>{props.book.title}</Link></h3> */}
            <h3><Link to={`/books/${props.book.id}`} onClick={null}>{props.book.title}</Link></h3>
            {/* <Switch>
                <Route exact path={`/books/:bookId`} component={Book} />
            </Switch> */}
            <button onClick={null}>Add Review</button>
        </div>
    )
}

export default BookListItem