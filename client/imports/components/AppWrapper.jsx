import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from './App';
import Index from './Index';
import Loading from './Loading';
import _ from 'lodash';
import { Tracker } from 'meteor/tracker';

function subscribeAll(ids, callback) {
  const readyFlags = _.map(ids, _.constant(false));
  _.each(ids, (id, index) => {
    Meteor.subscribe(id, () => {
      readyFlags[index] = true;

      if (_.every(readyFlags)) {
        callback();
      }
    });
  });
}

class AppWrapper extends React.Component {
  render() {
    const { loading, loggedIn } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (!loggedIn) {
      return <Index />;
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

    subscribeAll([
      'places',
    ], () => {
      subscriptionIsReady.set(true);
    });
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
