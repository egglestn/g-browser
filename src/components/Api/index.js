/* global gapi */
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

    this.handleClientLoad()

    console.log("Might have loaded a g client")
    return ("")
  }

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  handleClientLoad = () => {
    gapi.load('client:auth2', this.initClient());
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  initClient = () => {
    gapi.client.init({
      apiKey: this.state.API_KEY,
      //clientId: this.state.CLIENT_ID,
      discoveryDocs: [this.state.DISCOVERY_URL],
      scope: this.state.SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      // Handle the initial sign-in state.
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      this.authorizeButton.onclick = this.handleAuthClick();
      this.signoutButton.onclick = this.handleSignoutClick();
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      this.authorizeButton.style.display = 'none';
      this.signoutButton.style.display = 'block';
      this.listFiles();
    } else {
      this.authorizeButton.style.display = 'block';
      this.signoutButton.style.display = 'none';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
   appendPre = (message) => {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }

  /**
   * Print files.
   */
  listFiles = () => {
    gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': "nextPageToken, files(id, name)"
    }).then(function(response) {
      this.appendPre('Files:');
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          this.appendPre(file.name + ' (' + file.id + ')');
        }
      } else {
        this.appendPre('No files found.');
      }
    });
  }
}

export default Api
