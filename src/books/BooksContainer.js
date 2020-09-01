import React from 'react'
import BooksList from './BooksList'
import { connect } from 'react-redux'

const booksContainer = (props) => {
    return(
        <div>
            booksContainer
            <BooksList />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         books: state.books
//     };
// };

export default connect(null, null)(booksContainer)