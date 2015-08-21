'use strict';

export function organizationsReducer(state = {}, action) {
  if(action.type === undefined) {
    return state;
  }

  switch(action.type) {
    case 'LOAD_MEMBERS':
      var member;

      if(action.index == 0) {
        member = { name: 'Twitter member' };
      }
      if(action.index == 1) {
        member = { name: 'Github member' };
      }
      if(action.index == 2) {
        member = { name: 'Facebook member' };
      }
      if(member !== undefined) {
        return Object.assign({}, state, {
          members: [...state.members, member]
        });
      }
      return state;

    default:
      return state;
  }
}