import React from 'react'
import Book from './BookListItem'
import {connect} from 'react-redux'

const BooksList = (props) => {
    return (
        <div>
            {props.books.map(book => <Book book={book} key={book.id}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};


export default connect(mapStateToProps, null)(BooksList)