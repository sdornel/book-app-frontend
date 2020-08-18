import React from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchingBackendAPI } from './redux/actions'
import BooksContainer from './books/BooksContainer'
import './App.css';

class App extends React.Component { // client
  // constructor(){
  //   super()
  //   this.state = {
  //     data: null
  //   }
  // }

  componentDidMount(){
    this.props.fetchingBackendAPI()
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
    fetchingBackendAPI: () => {dispatch( fetchingBackendAPI() )},
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));