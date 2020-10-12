/*
 *
 * Users actions
 *
 */

import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
  CHANGE_USER_NAME
} from './constants';

export function loadUsers() {
  return {
    type: FETCH_USERS,
  };
}

export function loadUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

export function loadUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error,
  };
}

export function searchUser(searchTerm) {
  return {
    type: SEARCH_USERS,
    searchTerm
  };
}

export function searchUserSuccess(users) {
  return {
    type: SEARCH_USERS_SUCCESS,
    users
  };
}

export function searchUserFailure(error) {
  return {
    type: SEARCH_USERS_FAILURE,
    error
  };
}

export function onChangeUsername(username){
  return{
    type: CHANGE_USER_NAME,
    username
  }
}