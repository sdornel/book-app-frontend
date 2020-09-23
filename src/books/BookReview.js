import React from 'react'
import { connect } from 'react-redux'

const BookReview = (props) => {
    console.log("REVIEW", props)
    return (
        <div>
            Stars: {props.review.stars}
            <br/>
            Text: {props.review.text}
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         books: state.books
//     };
// };

export default connect(null, null)(BookReview)
