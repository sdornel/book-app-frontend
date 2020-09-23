import React from 'react'
import { connect } from 'react-redux'
import BookReview from './BookReview'

const Book = (props) => {
    console.log(props)
    return !props.book ? null : (
        <div>
            <h1>Book Information</h1>
            <li>{props.book.title}</li>
            <li>{props.book.author}</li>
            <li>{props.book.pages} pages</li>
            <h3>Reviews</h3>
                {props.book.Reviews.map(r => <BookReview review={r} key={r.id}/> )}
                {/* {props.books.map(book => <BookListItem book={book} key={book.id}/>)} */}
            {/* {props.book.Reviews[0].text} */}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => { // delete?
    console.log(ownProps)
    return {
        book: state.books.find(b => {
            return b.id === parseInt(ownProps.match.params.bookId)
        })
    };
};

export default connect(mapStateToProps, null)(Book)

// return {
//     courses: state.courses.filter(
//         c => {
//         return (
//             c.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
//             c.subject.toLowerCase().includes(state.searchText.toLowerCase()) ||
//             c.company.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
//             c.duration.toLowerCase().includes(state.searchText.toLowerCase()) ||
//             c.difficulty_level.toLowerCase().includes(state.searchText.toLowerCase())

//         )})
//     }