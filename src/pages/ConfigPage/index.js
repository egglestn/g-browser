import React from 'react'
import ApiForm from '../../components/ApiForm'


class ConfigPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        apiKey: null
    };
  }

  updateApiKey = (apiKeyValue) => {
    console.log(apiKeyValue)
    this.setState({apiKey: apiKeyValue});
  }

  render() {
    return (
      <div>
        <h2>Config Page!</h2>
        <ApiForm updateApiKey={this.updateApiKey.bind(this)}/>
      </div>
    )
  }
}

export default ConfigPage
