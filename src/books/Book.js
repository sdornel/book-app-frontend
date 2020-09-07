import React from 'react'
import { connect } from 'react-redux'

const Book = (props) => {
    return (
        <div>
            as
            <p>Another</p>
            <span>EUREKA!</span>
        </div>
    )
}

export default connect(null, null)(Book)