import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import {logoutUser} from '../redux/actions'

class Nav extends React.Component{
    handleClick = (event) => {
        console.log("logging out")
        localStorage.clear()
        this.props.logoutUser()
    }
    render(){
        return (
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/books">Books</Link>
                <br />
                { !this.props.user || this.props.user.length === 0 ? <Link to="/login">Login</Link> : <Link to="/" onClick={this.handleClick}>Logout</Link> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));