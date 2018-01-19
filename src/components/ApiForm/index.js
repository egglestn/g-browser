import React from 'react'

class ApiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiKey: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({apiKey: event.target.value});
  }

  handleSubmit(event) {
    alert('A key was submitted: ' + this.state.apiKey);
    event.preventDefault();
    this.props.updateApiKey(this.state.apiKey);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Google Api Key:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ApiForm
