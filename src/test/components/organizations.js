import React from 'react/addons';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import test from 'tape';

import setupDom from '../utils/dom';

import { Organization, OrganizationList } from '../../app/components/organization';

export default function organizationComponentSpecs() {
  test('organization component sets up properties correctly', (assert) => {
    setupDom();

    let organizationProps = {
      name: 'Test',
      clickFn: function(){}
    };

    let instance = ReactTestUtils.renderIntoDocument(<Organization organizationName={organizationProps.name} onOrganizationClick={organizationProps.clickFn} />);

    let renderedComponent = ReactTestUtils.findRenderedComponentWithType(instance, Organization);

    assert.equal(renderedComponent.props.organizationName, organizationProps.name);
    assert.equal(renderedComponent.props.onOrganizationClick, organizationProps.clickFn);

    assert.end();
  });

  test('clicking organization function calls click function passed into property', (assert) => {
    setupDom();

    let wasClicked = false;

    assert.false(wasClicked);
    function click() {
      wasClicked = true;
    }

    let instance = ReactTestUtils.renderIntoDocument(<Organization onOrganizationClick={click} />);

    var buttonToClick = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');

    ReactTestUtils.Simulate.click(buttonToClick);

    assert.true(wasClicked);

    assert.end();
  });

  test('organization list will have same number of organization components as passed into them', (assert) => {
    setupDom();

    let organizations = [
      { id: 1, name: 'Org 1' },
      { id: 2, name: 'Org 2' }
    ];

    let instance = ReactTestUtils.renderIntoDocument(<OrganizationList organizations={organizations} />);

    let organizationComponents = ReactTestUtils.scryRenderedComponentsWithType(instance, Organization);

    assert.equal(organizationComponents.length, 2);

    assert.end();
  });
}