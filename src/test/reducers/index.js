import test from 'tape';

import { organizationsReducer } from '../../app/reducers';

export default function organizationReducerSpecs() {
  test('returns the default state when action type is undefined', (assert) => {
    let initialState = {
      organizations: [{ id: 1, name: 'Org 1'}]
    };

    let newState = organizationsReducer(initialState, { type: undefined});

    assert.deepEqual(initialState, newState);

    assert.end();
  });

  test('returns the default state if no index is set on action', (assert) => {
    let initialState = {
      organizations: [{ id: 1, name: 'Org 1' }],
      members: []
    };

    let action = {
      type: 'LOAD_MEMBERS',
      index: 20
    };

    let newState = organizationsReducer(initialState, action);
    assert.deepEqual(initialState, newState);

    assert.end();
  });

  test('returns the state with a member when index in bounds is set on action', (assert) => {
    let initialState = {
      organizations: [{ id: 1, name: 'Org 1' }],
      members: []
    };

    let action = {
      type: 'LOAD_MEMBERS',
      index: 1
    };

    let newState = organizationsReducer(initialState, action);
    assert.notDeepEqual(initialState, newState);
    assert.equal(newState.members.length, 1);
    assert.end();
  });
}