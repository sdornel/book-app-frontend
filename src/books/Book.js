import React from 'react'
import { connect } from 'react-redux'

const Book = (props) => {
    console.log(props)
    return !props.book ? null : (
        <div>
            <h1>Book Information</h1>
            <li>{props.book.title}</li>
            <li>{props.book.author}</li>
            <li>{props.book.pages} pages</li>
            <h3>Reviews</h3>
            {
                props.book.Reviews.map(r => {
                    return (
                        <div>
                            <li>{r.stars}</li>
                            {/* TODO: create actual stars dependent on r.stars number */}
                            <li>{r.text}</li>
                        </div>
                    )
                })
            }
            {/* {props.book.Reviews[0].text} */}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
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