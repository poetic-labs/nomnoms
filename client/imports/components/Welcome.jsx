import React from 'react';
import { Link } from 'param-store';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="giphy-div welcome">
          <div className="centered-div absolute">
            <div className="welcome-image" />
          </div>
        </div>
        <div className="w-section main-content-centered">
          <h1>Hope you’re hungry, Dalia! Let’s set your lunch preferences.</h1>
        </div>
        <Link href="onboarding-places.html" className="w-button button-hollow" params={{  path: 'onboarding-places'}}> I was born ready
        </Link>
      </div>
      );
  }
}
;
