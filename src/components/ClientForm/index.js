import React from 'react'

class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clientKey: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({clientKey: event.target.value});
  }

  handleSubmit(event) {
    alert('A key was submitted: ' + this.state.clientKey);
    event.preventDefault();
    this.props.updateClientKey(this.state.clientKey);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Google Client Id:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ClientForm
