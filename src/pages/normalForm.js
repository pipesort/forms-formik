import React from 'react'


export default class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      gender: '',
      country: '',
      checkbox: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheck(event) {
    this.setState({ checkbox: event.target.checked });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name='fullName' type="text" value={this.state.fullName} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input name='email' type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input name='password' type="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Country:
        <select name='country' onChange={this.handleChange}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </label>
        <br />
        <label>
          <input name='gender' type="radio" value='male' onChange={this.handleChange} />
          Male
        </label>
        <label>
          <input name='gender' type="radio" value='female' onChange={this.handleChange} />
          Female
        </label>
        <br />
        <label>
          <input name='checkbox' type="checkbox" value={this.state.checkbox} onChange={this.handleCheck} />
          Terms & conditions
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}