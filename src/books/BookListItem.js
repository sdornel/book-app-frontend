import React from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => {
    console.log(props)
    return (
        <div>
            Book component
            <h3><Link to={`books/${props.book.id}`}>{props.book.title}</Link></h3>
            <button onClick={null}>Add Review</button>
        </div>
    )
}

export default Book