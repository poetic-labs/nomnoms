import React from 'react';

class Loading extends React.Component {
  componentWillMount() {
    const user = Meteor.user();
    console.log('user: ', user);
  }

  render() {
    return (
      <div>
        <div id="spinner" />
        <div className="vertical-centered-div vertical-gradient">
          <div>
            <h2 className="white">nom nom noms</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
