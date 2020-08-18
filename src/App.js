import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
import { callingBackendAPI } from './redux/actions'
import './App.css';

class App extends Component { // client
  // constructor(){
  //   super()
  //   this.state = {
  //     data: null
  //   }
  // }

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('http://localhost:3000/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data 
        {/* <p className="App-intro">{this.state.data}</p> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callingBackendAPI: () => {dispatch( callingBackendAPI() )},
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));