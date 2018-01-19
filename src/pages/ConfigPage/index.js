import React from 'react'
import ClientForm from '../../components/ClientForm'


class ConfigPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clientKey: null,
      apiKey: '282752980559'

    };
  }

  updateClientKey = (clientKeyValue) => {
    console.log(clientKeyValue)
    this.setState({clientKey: clientKeyValue});
  }

  render() {
    return (
      <div>
        <h2>Config Page!</h2>
        <ClientForm updateClientKey={this.updateClientKey.bind(this)}/>
      </div>
    )
  }
}

export default ConfigPage
