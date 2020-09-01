import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchingUsers } from './redux/actions'
import BooksContainer from './books/BooksContainer'
import './App.css';

class App extends React.Component { 


  componentDidMount(){
    this.props.fetchingUsers()
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
  }
}

const mapStateToProps = (state) => {
  console.log(state.users)
  return {
      users: state.users
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));