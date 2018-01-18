import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigPage } from './pages/ConfigPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  //expect(app).toContain("Config Page!")
  //const divs = app.find("div");
  //expect(divs.length).toBeGreaterThan(0);

  ReactDOM.unmountComponentAtNode(div);
});

/* describe("ConfigPage", () => {
  let props;
  let mountedConfigPage;
  const configPage = () => {
    if (!mountedConfigPage) {
      mountedConfigPage = ReactDOM.render(<ConfigPage/>, props);
    }
    return mountedConfigPage;
  }

  it("loads the page", () => {
    console.log("=======")
    console.log(configPage().toString())
    console.log("=======")
    //var mountedPage = configPage();
    //console.log(mountedPage);
    const divs = mountedConfigPage.find("div");
    expect(divs.length).toBeGreaterThan(0);
    //expect(divs.first).toContain("Config Page!")
  });
});*/

it('renders the config page', () => {
  const div = document.createElement('div');
  var app = ReactDOM.render("<ConfigPage>", div);

  //console.log(app)
  //expect(app).toContain("Config Page!")

  ReactDOM.unmountComponentAtNode(div);
});
