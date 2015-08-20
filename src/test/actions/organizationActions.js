import test from 'tape';

import { loadOrganizationMembers } from '../../app/actions/organizationActions';

export default function organizationActions() {
  test('the organization actions', (assert) => {
    let expected = {
      type: 'LOAD_MEMBERS',
      index: 1
    };
    let action = loadOrganizationMembers(1);

    assert.deepEqual(expected, action, 'Actions are not the same');
    assert.end();
  });
}
