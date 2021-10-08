import React from 'react';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react';
import './App.css';

//Class Based Component
class App extends React.Component {
  state = {};

  render() {
    return <div>App</div>;
  }
}

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: '#ff5771',
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: '#ff5771',
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff5771',
  },
};

export default withAuthenticator(App, true, [], null, theme);
