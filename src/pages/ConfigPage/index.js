import React from 'react'
//import ClientForm from '../../components/ClientForm'
//import Api from '../../components/Api'
//import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

class ConfigPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientKey: null,
    };
  }

  updateClientKey = (clientKeyValue) => {
    console.log("Update client key")
    this.setState({clientKey: clientKeyValue});
  }

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
        <h2>Testing google login button</h2>
        <GoogleLogin clientId="282752980559-bntufk9oeftfq204f9fu99ou2faou070.apps.googleusercontent.com"
                   buttonText="Login" onSuccess={this.responseGoogle} onFailure={this.responseGoogle}/>,
        document.getElementById('googleButton')
      </div>
    )
  }

  /*render() {
    return (
      <div>
        <h2>Config Page!</h2>
        <ClientForm updateClientKey={this.updateClientKey.bind(this)}/>
        <Api clientKey={this.state.clientKey}/>
      </div>
    )
  }*/
}

export default ConfigPage
