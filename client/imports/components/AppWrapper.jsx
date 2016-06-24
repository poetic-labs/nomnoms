import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ParamStore from 'param-store';
import App from './App';
import Loading from './Loading';
import { Tracker } from 'meteor/tracker';

const subscribeAll = (ids, callback) => {
  const readyFlags = _.map(ids, _.constant(false));

  _.each(ids, (id, index) => {
    Meteor.subscribe(id, () => {
      readyFlags[index] = true;

      if (_.every(readyFlags)) callback();
    });
  });
};

class AppWrapper extends React.Component {
  render() {
    const { loading, loggedIn } = this.props;

    if (loading) return <Loading />;
    if (!loggedIn) ParamStore.setAll({ path: '' });

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

    Tracker.nonreactive(() => {
      subscribeAll([
        'places',
        'plans',
      ], () => {
        subscriptionIsReady.set(true);
      });
    });
  } else {
    subscriptionIsReady.set(false);
  }
});

const AppWrapperWithContainer = createContainer(() => ({
  loading: Meteor.loggingIn() || (Boolean(Meteor.user()) && !subscriptionIsReady.get()),
  loggedIn: Boolean(Meteor.user()),
}), AppWrapper);

export default AppWrapperWithContainer;
