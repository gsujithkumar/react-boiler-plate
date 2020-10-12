/*
 *
 * MainForm reducer
 *
 */
import produce from 'immer';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_SUCCESS,
  LOAD_FEATURED_EVENTS_ERROR
} from './constants';

export const initialState = {
  featuredEvents: [],
  events: [],
  loading: false,
  error: '',
  errorFeatured: false,
  loadingFeatured: false,

};

/* eslint-disable default-case, no-param-reassign */
const mainFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log('In Reducer : ' + JSON.stringify(action))
    switch (action.type) {
      case LOAD_EVENTS:
         draft.loading = true,
          draft.error = false;
          break;
      case LOAD_EVENTS_ERROR:
         draft.loading = false,
          draft.error = true,
          draft.error = action.error;
          break;
      case LOAD_EVENTS_SUCCESS:
         draft.loading = false,
          draft.error = false,
          draft.events = action.events;
          break;
      case LOAD_FEATURED_EVENTS:
         draft.loadingFeatured = true,
          draft.errorFeatured = false;
          break;
      case LOAD_FEATURED_EVENTS_ERROR:
         draft.loadingFeatured = false,
          draft.errorFeatured = true,
          draft.error = action.error;
          break;
      case LOAD_FEATURED_EVENTS_SUCCESS:
         draft.loadingFeatured = false,
          draft.errorFeatured = false,
          draft.featuredEvents = action.featuredEvents;
          break;
      default:
        return state;
    }
  });

export default mainFormReducer;
