import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the users state domain
 */

const selectUsersDomain = state => state.users || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Users
 */

const makeSelectUsers = () =>
  createSelector(
    selectUsersDomain,
    substate => substate,
  );

const makeUsersSelector = ()=>
createSelector(
  selectUsersDomain,
  substate=> substate.users
);

const makeSearchUserSelector = ()=>
createSelector(
  selectUsersDomain,
  substate=> substate.username
);

const makeSearchUsersSelector = ()=>
createSelector(
  selectUsersDomain,
  substate=> substate.users
);

const makeSearchUsersBySearchTextSelector = (searchText)=>
createSelector(
  selectUsersDomain,
  substate => substate.users(x => String(x.first_name).includes(searchText) || String(x.last_name).includes(searchText))
  );

//export default makeSelectUsers;
export { selectUsersDomain , makeUsersSelector, makeSearchUsersSelector, makeSearchUsersBySearchTextSelector, makeSearchUserSelector };
