import React from 'react'

const Book = (props) => {
    return (
        <div>
            Book component
            <h3>{props.book.title}</h3>
        </div>
    )
}

export default Book