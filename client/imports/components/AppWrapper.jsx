import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import App from './App';

class AppWrapper extends React.Component {
  render() {
    return <App />;
  }
}

AppWrapper.propTypes = {
  loading: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
};

const AppWrapperWithContainer = createContainer(() => {
  return {
    loading: false,
    loggedIn: false,
  };
}, AppWrapper);

export default AppWrapperWithContainer;
