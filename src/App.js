import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchingUsers, fetchingBooks } from './redux/actions'
import BooksContainer from './books/BooksContainer'
import './App.css';

class App extends React.Component { 


  componentDidMount(){
    this.props.fetchingUsers()
    this.props.fetchingBooks()
  }

  render() {
    return (
      <div className="App">
        App
        <BooksContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingUsers: () => {dispatch( fetchingUsers() )},
    fetchingBooks: () => {dispatch( fetchingBooks() )}
  }
}

const mapStateToProps = (state) => {
  console.log(state.books)
  return {
      users: state.users,
      books: state.books
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));