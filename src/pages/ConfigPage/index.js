import React from 'react'
import ClientForm from '../../components/ClientForm'
import Api from '../../components/Api'


class ConfigPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientKey: null,
    };
  }

  updateClientKey = (clientKeyValue) => {
    this.setState({clientKey: clientKeyValue});
  }

  render() {
    return (
      <div>
        <h2>Config Page!</h2>
        <ClientForm updateClientKey={this.updateClientKey.bind(this)}/>
        <Api clientKey={this.state.clientKey}/>
      </div>
    )
  }
}

export default ConfigPage
