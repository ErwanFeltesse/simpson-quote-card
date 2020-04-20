import React, { Component } from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30; // You can change the value

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    // SOLUTION to limit the input to 30 characters: if the new value
    // (event.target.value) is SHORTER OR EQUAL than the maximum then set the state, do nothing otherwise
    if (event.target.value.length <= MAX_LENGTH) {
      this.setState({ character: event.target.value });
    }
  }

  render() {
    // SOLUTION for conditional border color : compute a BOOLEAN
    // telling if we've reached the maximum, and use it in the input's className
    const maximumReached = this.state.character.length >= MAX_LENGTH;

    // SOLUTION for displaying the number of remaining characters :
    // we compute it here and use it below
    const numRemaining = MAX_LENGTH - this.state.character.length;
    return (
      <form className="QuoteForm" onSubmit={this.handleSubmit}>
        <label htmlFor="character">Character:</label>
        {/* show a class or another depending on maximumReached */}
        <input
          className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
          id="name"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
    );
  }
}

export default QuoteForm;