import React from 'react'

const Book = (props) => {
    return (
        <div>
            Book component
            <h3>{props.book.title}</h3>
            <button onClick={null}>Add Review</button>
        </div>
    )
}

export default Book