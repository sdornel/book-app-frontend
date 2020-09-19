import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchingBooks, fetchingAllReviews, fetchingUser } from './redux/actions'
import BooksContainer from './books/BooksContainer'
import Book from './books/Book'
import Nav from './components/Nav'
import Login from './components/Login'
import './App.css';

class App extends React.Component { 


  componentDidMount(){
    // this.props.fetchingUsers()
    this.props.fetchingBooks()
    this.props.fetchingAllReviews()
    // this.props.fetchingUser()
  }

  render() {
    return (
      <div className="App">
        App
        <Nav />

      {
      !this.props.user || this.props.user.length === 0 ?
        null
        :
        <div>
          <h2>Welcome {this.props.user.name}!</h2>
        </div>
      }
              <Switch>
          {/* <Route exact path="/profile" component={UserContainer} /> */}
          <Route path="/books/:bookId" component={Book} />
          <Route path="/books" component={BooksContainer} />
          <Route path="/login" component={Login} />
          {/* Home needs to come last */}
          
      </Switch>
      </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchingUsers: () => {dispatch( fetchingUsers() )},
    fetchingBooks: () => {dispatch( fetchingBooks() )},
    fetchingAllReviews: () => {dispatch( fetchingAllReviews() )},
    // fetchingUser: () => {dispatch( fetchingUser() )},
    // creatingUser: () => {dispatch( creatingUser() )},
  }
}

const mapStateToProps = (state) => {
  return {
      // users: state.users,
      books: state.books,
      reviews: state.reviews,
      user: state.user
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));