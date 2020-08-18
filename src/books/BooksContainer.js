import React from 'react'
import { connect } from 'react-redux'

const booksContainer = (props) => {
    return(
        <div>
            booksContainer
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        backendAPI: state.backendAPI // rename later
    };
};

export default connect(mapStateToProps, null)(booksContainer)