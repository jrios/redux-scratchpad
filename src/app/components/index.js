'use strict';

import React from 'react';
import { OrganizationList } from './organization';
import { loadOrganizationMembers } from '../actions/organizationActions';
import { connect } from 'react-redux';

const App = React.createClass({
  render() {
    const { dispatch, organizations, members } = this.props;
    return (
      <div>
        <h1>Organizations</h1>
        <OrganizationList organizations={organizations} 
          onAddOrganization={index => dispatch(loadOrganizationMembers(index)) } />
        <div>
          <h2>Members</h2>
          <ul>
            {members.map(member => {
              return <li>{member.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
});

function select(state) {
  return {
    organizations: state.organizations,
    members: state.members
  };
}

export default connect(select)(App);