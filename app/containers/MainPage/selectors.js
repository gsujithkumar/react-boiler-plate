import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainForm state domain
 */

const selectMainFormDomain = state => state.mainForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainForm
 */

const makeSelectMainForm = () =>
  createSelector(
    selectMainFormDomain,
    substate => substate,
  );

const makeFeaturedEventsSelector = ()=>
createSelector(
  selectMainFormDomain,
  substate => substate.featuredEvents
)

const makeEventsSelector = ()=>
createSelector(
  selectMainFormDomain,
  substate=> substate.events
)

// export default makeSelectMainForm;
export { selectMainFormDomain, makeFeaturedEventsSelector, makeEventsSelector };
