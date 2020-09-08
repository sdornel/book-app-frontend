import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/books">Books</Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Nav