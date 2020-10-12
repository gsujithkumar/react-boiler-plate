import { take, call, put, select, all } from 'redux-saga/effects';

import events from './mocks/Events';
import featuredEvents from './mocks/FeaturedEvents';
import {loadFeaturedEventsSuccess, loadEventsSuccess} from './actions'


// Individual exports for testing
export default function* mainFormSaga() {
  // See example in containers/HomePage/saga.js

  yield all([loadEvents(),loadFeaturedEvents()])
}
export function* loadFeaturedEvents(){
  yield put(loadFeaturedEventsSuccess(featuredEvents))

}
export function* loadEvents(){
  yield put(loadEventsSuccess(events))
}