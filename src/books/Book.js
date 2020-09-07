import React from 'react'
import { connect } from 'react-redux'

const Book = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.reviews.map(review => {
                    return (
                        <div>
                            <li>{review.stars}</li>
                            <li>{review.text}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    };
};

export default connect(mapStateToProps, null)(Book)