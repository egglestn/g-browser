import React from 'react'

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // Array of API discovery doc URLs for APIs used by the quickstart
        DISCOVERY_URL: "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
        SCOPES: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        API_KEY: '282752980559'

    }
  }

  render() {
    console.log("Init g api client")
    console.log(this.props.clientKey)

    return ("")
  }
}

export default Api
