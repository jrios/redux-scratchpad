'use strict';

import React from 'react';
import { OrganizationList } from './organization';
import { connect } from 'react-redux';

const App = React.createClass({
  render() {
    let organizations = [{
      name: 'Foo'
    }];
    const { orgs } = this.props;
    return (
      <div>
        <h1>Your Organizations</h1>
        <OrganizationList organizations={organizations} />
      </div>
    );
  }
});

function select(state) {
  return {
    organizations: state.organizations
  };
}


export default connect(select)(App);