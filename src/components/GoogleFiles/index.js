/* global gapi */
import React from 'react'

class GoogleFiles extends React.Component {

  listFiles = () => {
    gapi.client.drive.files.list({
      'maxResults': 10
    }).then(function(response) {
      console.log('Files:');
      var files = response.result.items;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file.title + ' (' + file.id + ')');
        }
      } else {
        console.log('No files found.');
      }
    })
  }

  render() {
    return (
      <div>
         <button onClick={this.listFiles}>List files</button>
      </div>
    )
  }
}

export default GoogleFiles
