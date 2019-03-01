import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

componentDidMount() {
  axios.get('http://localhost:3333/smurfs')
  .then(res => {this.setState( () => ({smurfs: res.data})); })
  .catch(err => console.log(err))
}

addSmurf = (e, smurf) => {
  e.preventDefault();
  axios.post('http://localhost:3333/smurfs', smurf)
  .then(res => {console.log(res); this.props.history.push('/smurf-form');
  })
  .catch(err => {console.log(err); });
};

  render() {
    return (
      <div className="App">
        <nav>
          <p><NavLink to='/smurf-form'>Add Smurf</NavLink></p>
          <p><NavLink exact to='/'>Smurf List</NavLink></p>
        </nav>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
        <Route exact path="/" exact render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
