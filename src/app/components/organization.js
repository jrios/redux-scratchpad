'use strict';

import React from 'react';
import loadOrganizationMembers from '../actions/organizationActions';

const Organization = React.createClass({
  render() {
    return (
      <div className="organization">
        <img src="http://placehold.it/75x75" />
        <span>{this.props.organizationName}</span>
        <button onClick={this.props.onOrganizationClick}>
          Add Organization
        </button>
      </div>
    );
  }
});

const OrganizationList = React.createClass({
  getOrganizations(orgs) {
    return orgs.map((org, index) => {
      return <Organization key={org.id} organizationName={org.name} 
        url={org.url} 
        onOrganizationClick={() => this.props.onAddOrganization(index)}/>;
    });
  },
  render() {
    return (
      <div>
        {this.getOrganizations(this.props.organizations)}
      </div>)
  }
});

export { Organization, OrganizationList };