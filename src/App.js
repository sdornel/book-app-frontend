import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchingUsers, fetchingBooks, fetchingAllReviews, creatingUser } from './redux/actions'
import BooksContainer from './books/BooksContainer'
import Book from './books/BooksContainer'
import Nav from './components/Nav'
import './App.css';

class App extends React.Component { 


  componentDidMount(){
    this.props.fetchingUsers()
    this.props.fetchingBooks()
    this.props.fetchingAllReviews()
  }

  render() {
    return (
      <div className="App">
        App
        <Nav />
        <Switch>
          {/* <Route exact path="/profile" component={UserContainer} /> */}
          <Route path="/book/:bookId" component={Book} />
          <Route exact path="/books" component={BooksContainer} />
          {/* Home needs to come last */}
      </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingUsers: () => {dispatch( fetchingUsers() )},
    fetchingBooks: () => {dispatch( fetchingBooks() )},
    fetchingAllReviews: () => {dispatch( fetchingAllReviews() )},
    // creatingUser: () => {dispatch( creatingUser() )},
  }
}

const mapStateToProps = (state) => {
  return {
      users: state.users,
      books: state.books,
      reviews: state.reviews
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));