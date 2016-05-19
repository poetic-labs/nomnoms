import React from 'react';
import { Link } from 'param-store';

export default class CreatePlanCopy extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section title-section new-plan">
          <Link href="today-blank.html" className="w-inline-block" params={{  path: 'today-blank'}}>
          <img width="14" src="images/back-orange.png" />
          </Link>
          <h1 className="centered">New Lunch Plan</h1>
        </div>
        <div className="tab-div">
          <h3 className="label tabs">HOW ARE YOU GETTING THERE?</h3>
        </div>
        <div className="w-section">
          <div className="transportation-picker">
            <div data-duration-in="300" data-duration-out="100" className="w-tabs">
              <div className="w-tab-menu tabs-menu">
                <a data-w-tab="Tab 1" className="w-tab-link w--current w-inline-block tab-plan driving" /> <a data-w-tab="Tab 2" className="w-tab-link w-inline-block tab-plan"
                /> <a data-w-tab="Tab 3" className="w-tab-link w-inline-block tab-plan delivery" />
              </div>
              <div className="w-tab-content tabs-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active tab-pane-form">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form">
                      <label className="label" htmlFor="name">
                        WHERE?
                      </label>
                      <input id="name"
                        type="text"
                        name="name"
                        data-name="Name"
                        className="w-input text-field" />
                      <label className="label" htmlFor="field-2">
                        WHEN?
                      </label>
                      <select id="field-2"
                        name="field-2"
                        required="required"
                        data-name="Field 2"
                        className="w-select select">
                        <option value="11:00">
                          11:00
                        </option>
                        <option value="11:15">
                          11:15
                        </option>
                        <option value="11:30">
                          11:30
                        </option>
                        <option value="11:45">
                          11:45
                        </option>
                        <option value="12:00">
                          12:00
                        </option>
                        <option value="12:15">
                          12:15
                        </option>
                        <option value="12:30">
                          12:30
                        </option>
                        <option value="12:45">
                          12:45
                        </option>
                        <option value="1:00">
                          1:00
                        </option>
                        <option value="1:15">
                          1:15
                        </option>
                        <option value="1:30">
                          1:30
                        </option>
                        <option value="1:45">
                          1:45
                        </option>
                        <option value="2:00">
                          2:00
                        </option>
                      </select>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-2"
                          type="checkbox"
                          name="Place-Checkbox-2"
                          data-name="Place Checkbox 2"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div active" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Are you the driver?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-3"
                          type="checkbox"
                          name="Place-Checkbox-3"
                          data-name="Place Checkbox 3"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Accepting additional orders?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-4"
                          type="checkbox"
                          name="Place-Checkbox-4"
                          data-name="Place Checkbox 4"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Calling in?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-5"
                          type="checkbox"
                          name="Place-Checkbox-5"
                          data-name="Place Checkbox 5"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Dining in?
                        </label>
                      </div>
                      <input type="submit"
                        value="Create a lunch plan"
                        data-wait="Please wait..."
                        className="w-button button-hollow fixed" />
                    </form>
                    <div className="w-form-done">
                      <p>
                        Thank you! Your submission has been received!
                      </p>
                    </div>
                    <div className="w-form-fail">
                      <p>
                        Oops! Something went wrong while submitting the form
                      </p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane tab-pane-form">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form">
                      <label className="label" htmlFor="name-2">
                        WHERE?
                      </label>
                      <input id="name-2"
                        type="text"
                        name="name-2"
                        data-name="Name 2"
                        className="w-input text-field" />
                      <label className="label" htmlFor="field">
                        WHEN?
                      </label>
                      <select id="field"
                        name="field"
                        required="required"
                        className="w-select select">
                        <option value="11:00">
                          11:00
                        </option>
                        <option value="11:15">
                          11:15
                        </option>
                        <option value="11:30">
                          11:30
                        </option>
                        <option value="11:45">
                          11:45
                        </option>
                        <option value="12:00">
                          12:00
                        </option>
                        <option value="12:15">
                          12:15
                        </option>
                        <option value="12:30">
                          12:30
                        </option>
                        <option value="12:45">
                          12:45
                        </option>
                        <option value="1:00">
                          1:00
                        </option>
                        <option value="1:15">
                          1:15
                        </option>
                        <option value="1:30">
                          1:30
                        </option>
                        <option value="1:45">
                          1:45
                        </option>
                        <option value="2:00">
                          2:00
                        </option>
                      </select>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-7"
                          type="checkbox"
                          name="Place-Checkbox-7"
                          data-name="Place Checkbox 7"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Accepting additional orders?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-8"
                          type="checkbox"
                          name="Place-Checkbox-8"
                          data-name="Place Checkbox 8"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Calling in?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-9"
                          type="checkbox"
                          name="Place-Checkbox-9"
                          data-name="Place Checkbox 9"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Dining in?
                        </label>
                      </div>
                      <input type="submit"
                        value="Create a lunch plan"
                        data-wait="Please wait..."
                        className="w-button button-hollow fixed" />
                    </form>
                    <div className="w-form-done">
                      <p>
                        Thank you! Your submission has been received!
                      </p>
                    </div>
                    <div className="w-form-fail">
                      <p>
                        Oops! Something went wrong while submitting the form
                      </p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane tab-pane-form">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form">
                      <label className="label" htmlFor="name-3">
                        WHERE?
                      </label>
                      <input id="name-3"
                        type="text"
                        name="name-3"
                        data-name="Name 3"
                        className="w-input text-field" />
                      <label className="label" htmlFor="field-3">
                        WHEN?
                      </label>
                      <select id="field-3"
                        name="field-3"
                        required="required"
                        data-name="Field 3"
                        className="w-select select">
                        <option value="11:00">
                          11:00
                        </option>
                        <option value="11:15">
                          11:15
                        </option>
                        <option value="11:30">
                          11:30
                        </option>
                        <option value="11:45">
                          11:45
                        </option>
                        <option value="12:00">
                          12:00
                        </option>
                        <option value="12:15">
                          12:15
                        </option>
                        <option value="12:30">
                          12:30
                        </option>
                        <option value="12:45">
                          12:45
                        </option>
                        <option value="1:00">
                          1:00
                        </option>
                        <option value="1:15">
                          1:15
                        </option>
                        <option value="1:30">
                          1:30
                        </option>
                        <option value="1:45">
                          1:45
                        </option>
                        <option value="2:00">
                          2:00
                        </option>
                      </select>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input id="Place-Checkbox-10"
                          type="checkbox"
                          name="Place-Checkbox-10"
                          data-name="Place Checkbox 10"
                          className="w-checkbox-input checkbox-tick" />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Accepting additional orders?
                        </label>
                      </div>
                      <input type="submit"
                        value="Create a lunch plan"
                        data-wait="Please wait..."
                        className="w-button button-hollow fixed" />
                    </form>
                    <div className="w-form-done">
                      <p>
                        Thank you! Your submission has been received!
                      </p>
                    </div>
                    <div className="w-form-fail">
                      <p>
                        Oops! Something went wrong while submitting the form
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
;
