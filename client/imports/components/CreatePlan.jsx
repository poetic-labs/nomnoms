/* eslint-disable */
import React from 'react';
import { Link } from 'param-store';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class CreatePlan extends React.Component {
  render() {
    return (
      <div>
        <div className="w-section title-section new-plan">
          <Link href="today-blank.html" className="w-inline-block" params={{  path: 'today-blank'}}>
          <img src="images/back-orange.png" width="14" />
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
                    <form data-name="Email Form"
                      id="email-form"
                      name="email-form"
                      onSubmit={this.props['action.createPlan.submitEmailForm']}>
                      <label className="label" htmlFor="name">
                        WHERE?
                      </label>
                      <input data-name="Name"
                        id="name"
                        maxlength="256"
                        name="name"
                        type="text"
                        className="w-input text-field"
                        value={this.props['state.createPlan.name']}
                        onChange={this.props['action.createPlan.changeName']} />
                      <label className="label" htmlFor="field-2">
                        WHEN?
                      </label>
                      <select data-name="Field 2"
                        id="field-2"
                        name="field-2"
                        required="required"
                        className="w-select select"
                        selected={this.props['state.createPlan.field2']}
                        onChange={this.props['action.createPlan.selectField2']}>
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
                        <input data-name="Place Checkbox 2"
                          id="Place-Checkbox-2"
                          name="Place-Checkbox-2"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox2']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox2']} />
                        <div className="checkbox-click-div active" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Are you the driver?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input data-name="Place Checkbox 3"
                          id="Place-Checkbox-3"
                          name="Place-Checkbox-3"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox3']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox3']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Accepting additional orders?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input data-name="Place Checkbox 4"
                          id="Place-Checkbox-4"
                          name="Place-Checkbox-4"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox4']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox4']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Calling in?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input data-name="Place Checkbox 5"
                          id="Place-Checkbox-5"
                          name="Place-Checkbox-5"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox5']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox5']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Dining in?
                        </label>
                      </div>
                      <div>
                        <input data-wait="Please wait..."
                          type="submit"
                          value="Create a lunch plan"
                          className="w-button button-hollow" />
                      </div>
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
                    <form data-name="Email Form"
                      id="email-form"
                      name="email-form"
                      onSubmit={this.props['action.createPlan.submitEmailForm']}>
                      <label className="label" htmlFor="name-2">
                        WHERE?
                      </label>
                      <input data-name="Name 2"
                        id="name-2"
                        maxlength="256"
                        name="name-2"
                        type="text"
                        className="w-input text-field"
                        value={this.props['state.createPlan.name2']}
                        onChange={this.props['action.createPlan.changeName2']} />
                      <label className="label" htmlFor="field">
                        WHEN?
                      </label>
                      <select id="field"
                        name="field"
                        required="required"
                        className="w-select select"
                        selected={this.props['state.createPlan.field']}
                        onChange={this.props['action.createPlan.selectField']}>
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
                        <input data-name="Place Checkbox 7"
                          id="Place-Checkbox-7"
                          name="Place-Checkbox-7"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox7']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox7']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Accepting additional orders?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input data-name="Place Checkbox 8"
                          id="Place-Checkbox-8"
                          name="Place-Checkbox-8"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox8']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox8']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Calling in?
                        </label>
                      </div>
                      <div className="w-checkbox w-clearfix checkbox-field">
                        <input data-name="Place Checkbox 9"
                          id="Place-Checkbox-9"
                          name="Place-Checkbox-9"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox9']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox9']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Dining in?
                        </label>
                      </div>
                      <div>
                        <input data-wait="Please wait..."
                          type="submit"
                          value="Create a lunch plan"
                          className="w-button button-hollow" />
                      </div>
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
                    <form data-name="Email Form"
                      id="email-form"
                      name="email-form"
                      onSubmit={this.props['action.createPlan.submitEmailForm']}>
                      <label className="label" htmlFor="name-3">
                        WHERE?
                      </label>
                      <input data-name="Name 3"
                        id="name-3"
                        maxlength="256"
                        name="name-3"
                        type="text"
                        className="w-input text-field"
                        value={this.props['state.createPlan.name3']}
                        onChange={this.props['action.createPlan.changeName3']} />
                      <label className="label" htmlFor="field-3">
                        WHEN?
                      </label>
                      <select data-name="Field 3"
                        id="field-3"
                        name="field-3"
                        required="required"
                        className="w-select select"
                        selected={this.props['state.createPlan.field3']}
                        onChange={this.props['action.createPlan.selectField3']}>
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
                        <input data-name="Place Checkbox 10"
                          id="Place-Checkbox-10"
                          name="Place-Checkbox-10"
                          type="checkbox"
                          className="w-checkbox-input checkbox-tick"
                          checked={this.props['state.createPlan.placeCheckbox10']}
                          onChange={this.props['action.createPlan.togglePlaceCheckbox10']} />
                        <div className="checkbox-click-div" />
                        <label className="w-form-label checkbox-text plan" htmlFor="Place-Checkbox">
                          Accepting additional orders?
                        </label>
                      </div>
                      <div>
                        <input data-wait="Please wait..."
                          type="submit"
                          value="Create a lunch plan"
                          className="w-button button-hollow" />
                      </div>
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
const CreatePlanWithRedux = reduxConnect(
  (state) => ({
    'state.createPlan.name': state.createPlan.name,
    'state.createPlan.field2': state.createPlan.field2,
    'state.createPlan.placeCheckbox2': state.createPlan.placeCheckbox2,
    'state.createPlan.placeCheckbox3': state.createPlan.placeCheckbox3,
    'state.createPlan.placeCheckbox4': state.createPlan.placeCheckbox4,
    'state.createPlan.placeCheckbox5': state.createPlan.placeCheckbox5,
    'state.createPlan.name2': state.createPlan.name2,
    'state.createPlan.field': state.createPlan.field,
    'state.createPlan.placeCheckbox7': state.createPlan.placeCheckbox7,
    'state.createPlan.placeCheckbox8': state.createPlan.placeCheckbox8,
    'state.createPlan.placeCheckbox9': state.createPlan.placeCheckbox9,
    'state.createPlan.name3': state.createPlan.name3,
    'state.createPlan.field3': state.createPlan.field3,
    'state.createPlan.placeCheckbox10': state.createPlan.placeCheckbox10
  }),
  {
    'action.createPlan.submitEmailForm': action.createPlan.submitEmailForm,
    'action.createPlan.changeName': action.createPlan.changeName,
    'action.createPlan.selectField2': action.createPlan.selectField2,
    'action.createPlan.togglePlaceCheckbox2': action.createPlan.togglePlaceCheckbox2,
    'action.createPlan.togglePlaceCheckbox3': action.createPlan.togglePlaceCheckbox3,
    'action.createPlan.togglePlaceCheckbox4': action.createPlan.togglePlaceCheckbox4,
    'action.createPlan.togglePlaceCheckbox5': action.createPlan.togglePlaceCheckbox5,
    'action.createPlan.submitEmailForm': action.createPlan.submitEmailForm,
    'action.createPlan.changeName2': action.createPlan.changeName2,
    'action.createPlan.selectField': action.createPlan.selectField,
    'action.createPlan.togglePlaceCheckbox7': action.createPlan.togglePlaceCheckbox7,
    'action.createPlan.togglePlaceCheckbox8': action.createPlan.togglePlaceCheckbox8,
    'action.createPlan.togglePlaceCheckbox9': action.createPlan.togglePlaceCheckbox9,
    'action.createPlan.submitEmailForm': action.createPlan.submitEmailForm,
    'action.createPlan.changeName3': action.createPlan.changeName3,
    'action.createPlan.selectField3': action.createPlan.selectField3,
    'action.createPlan.togglePlaceCheckbox10': action.createPlan.togglePlaceCheckbox10
  }
)(CreatePlan);

export default CreatePlanWithRedux;
