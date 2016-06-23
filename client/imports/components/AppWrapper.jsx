import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import App from './App';
import Loading from './Loading';

class AppWrapper extends React.Component {
  render() {
    const { loading, loggedIn } = this.props;

    if (!loggedIn) {
      return <Loading />;
    }

    return <App />;
  }
}

AppWrapper.propTypes = {
  loading: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
};

const subscriptionIsReady = new ReactiveVar(false);

Tracker.autorun(() => {
  if (Meteor.user()) {
    if (subscriptionIsReady.get()) {
      return;
    }
  } else {
    subscriptionIsReady.set(false);
  }
});

const AppWrapperWithContainer = createContainer(() => {
  return {
    loading: Meteor.loggingIn() || (Boolean(Meteor.user()) && !subscriptionIsReady.get()),
    loggedIn: Boolean(Meteor.user()),
  };
}, AppWrapper);

export default AppWrapperWithContainer;
