import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loadUsersSuccess, searchUserSuccess, loadUsersFailure, searchUserFailure } from './actions'
import { FETCH_USERS, SEARCH_USERS } from './constants'
import request from 'utils/request';
import { makeSearchUserSelector, makeUsersSelector } from './selectors'

// Individual exports for testing
export default function* usersSaga() {
  // See example in containers/HomePage/saga.js

  yield takeLatest(FETCH_USERS, fetchUsers)
  yield takeLatest(SEARCH_USERS, searchUsers)
}

export function* fetchUsers() {
  const requestURL = 'https://reqres.in/api/users?per_page=50';

  try {
    const users = yield call(request, requestURL);
    yield put(loadUsersSuccess(users.data));

  } catch (error) {
    yield put(loadUsersFailure(error));
  }
}

export function* searchUsers() {
//console.log('Inside Search Users - Saga')
  try {
    const username =yield select(makeSearchUserSelector());

    const users = yield select(makeUsersSelector());
   // console.log('Username : ' + JSON.stringify(username))
  //  console.log('users : ' + JSON.stringify(users))

    const filtered = username.length>0? users.filter(user =>
      user.first_name.toLowerCase().includes(username.toLowerCase()) ||
      user.first_name.toLowerCase().includes(username.toLowerCase())) : users;
    yield put(searchUserSuccess(filtered));

  } catch (error) {
    console.log(error)
    yield put(searchUserFailure(error));
  }
}
