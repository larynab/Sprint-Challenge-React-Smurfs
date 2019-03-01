import React, { Component } from 'react';

class SmurfForm extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({ 
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value 
      }
    }));
  }

  render() {
    return (
        <form onSubmit={ e => this.props.addSmurf(e, this.state.smurf)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button>Add to the village</button>
        </form>
    );
  }
}

export default SmurfForm;
