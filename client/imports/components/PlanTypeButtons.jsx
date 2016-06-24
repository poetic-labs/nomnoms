import React from 'react';

class PlanTypeButtons extends React.Component {
  render() {
    return (
      <div className="w-tab-menu tabs-menu">
        <a data-w-tab="Tab 1" className="w-tab-link w--current w-inline-block tab-plan driving" />
        <a data-w-tab="Tab 2" className="w-tab-link w-inline-block tab-plan" />
        <a data-w-tab="Tab 3" className="w-tab-link w-inline-block tab-plan delivery" />
      </div>
    );
  }
}

export default PlanTypeButtons;
