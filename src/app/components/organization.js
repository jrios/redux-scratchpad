'use strict';

import React from 'react';

const Organization = React.createClass({
  loadOrganizationMembers() {
    console.log(this.props.url);
  },
  render() {
    return (
      <li>
        <a href="#" onClick={this.loadOrganizationMembers}>{this.props.organizationName}</a>
      </li>
    );
  }
});

const OrganizationList = React.createClass({
  getOrganizations(orgs) {
    return orgs.map(org => {
      return <Organization organizationName={org.name} url={org.url} />;
    });
  },
  render() {
    return (
      <ul>
        {this.getOrganizations(this.props.organizations)}
      </ul>)
  }
});

export { OrganizationList };