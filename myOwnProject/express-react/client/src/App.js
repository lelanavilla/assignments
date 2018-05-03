import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <div> 
           <h1 className="App-title">Users</h1>
        </div>
        {this.state.users.map(user =>
      <div key={user.id}>{user.name}>
      </div>
      )}
      </div>
    );}}


export default App;
