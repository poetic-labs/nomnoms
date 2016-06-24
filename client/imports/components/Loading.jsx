import React from 'react';

class Loading extends React.Component {
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
