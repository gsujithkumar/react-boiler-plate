/*
 *
 * MainForm actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,
  LOAD_FEATURED_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS_SUCCESS
} from './constants';

export function loadEvents(tenentId, skip, take, searchTerm) {
  return {
    type: LOAD_EVENTS,
    tenentId,
    skip,
    take,
    searchTerm,
  };
}

export function loadEventsSuccess(events) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

export function loadEventsError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}


export function loadFeaturedEvents(tenentId, skip, take) {
  return {
    type: LOAD_FEATURED_EVENTS,
    tenentId,
    skip,
    take,
  };
}

export function loadFeaturedEventsSuccess(featuredEvents) {
  return {
    type: LOAD_FEATURED_EVENTS_SUCCESS,
    featuredEvents,
  };
}

export function loadFeaturedEventsError(error) {
  return {
    type: LOAD_FEATURED_EVENTS_ERROR,
    error,
  };
}


