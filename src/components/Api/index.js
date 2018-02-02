/* global gapi */
import React from 'react'
import LoginButton from '../LoginButton'

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

  /*render() {
    console.log("Init g api client")
    console.log(this.props.clientKey)

    //gapi.load('client', this.initClient());

    //this.handleClientLoad()

    console.log("Have not loaded a g client")
    return ("")
  }*/

  loadGApi() {
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/client.js"

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(this.state.API_KEY);
        gapi.load('auth2', () => {
          // Retrieve the singleton for the GoogleAuth library and set up the client.
          this.auth2 = gapi.auth2.init({
            client_id: this.state.API_KEY + '-bntufk9oeftfq204f9fu99ou2faou070.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
          });

          console.log("Have loaded auth 2. Possibly")
          console.log(this.state.API_KEY)
          console.log(this.auth2)
          console.log(this.refs.googleButton)

          this.auth2.attachClickHandler(this.refs.googleButton, {},
            (googleUser) => {
                this.googleLogin(googleUser.getBasicProfile());
            }, (error) => {
                console.error(error)
            });
        });
        this.setState({ gapiReady: true })
      })
    }

    document.body.appendChild(script)
  }

  componentDidMount() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
    this.loadGApi();
  }

  render() {
    if (this.state.gapiReady) {
      //this.listFiles()
      return (<h1>GAPI is loaded and ready to use.</h1>)
    } else {
      return (<h1>GAPI did not load</h1>)
    }
  }

  /**
   *  On load, called to load the auth2 library and API client library.
   */
/*  handleClientLoad = () => {
    gapi.load('client:auth2', this.initClient());
  } */

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
 /* initClient = () => {
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
 /* updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      this.authorizeButton.style.display = 'none';
      this.signoutButton.style.display = 'block';
      this.listFiles();
    } else {
      this.authorizeButton.style.display = 'block';
      this.signoutButton.style.display = 'none';
    }
  }*/

  /**
   *  Sign in the user upon button click.
   */
 /* handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  }*/

  /**
   *  Sign out the user upon button click.
   */
 /* handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
  }*/

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
 /*  appendPre = (message) => {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }*/

  /**
   * Print files.
   */
  /*listFiles = () => {
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
  }*/

  /*listFiles = () => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET','https://www.googleapis.com/drive/v2/files');

    var mysearch = encodeURIComponent("q=trashed=false");

    xhr.open('GET',"https://www.googleapis.com/drive/v2/files?" +mysearch,true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onload = function() { handleResponse(xhr.responseText); };
    xhr.onerror = function() { handleResponse(null); };
    xhr.send();
  }*/
}

export default Api
