/*
 *
 * Users reducer
 *
 */
import produce from 'immer';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
  CHANGE_USER_NAME,
} from './constants';

export const initialState = {
  users: [],
  loading: false,
  userError: false,
  userErrorMessage: '', 
  searchLoading: false,
  searchError: false,
  searchErrorMessage: '',
  username:''

};

/* eslint-disable default-case, no-param-reassign */
const usersReducer = (state = initialState, action) =>
  produce(state, draft => {
  //  console.log('Inside Users Reducer : ' + JSON.stringify(action))
    switch (action.type) {
      case FETCH_USERS:
        draft.loading = true,
          draft.userError = false,
          draft.userErrorMessage = ''
        break;
      case FETCH_USERS_SUCCESS:
        draft.loading = false,
          draft.userError = false,
          draft.userErrorMessage = ''
        draft.users = action.users
        break;
      case FETCH_USERS_FAILURE:
        draft.loading = false,
          draft.userError = true,
          draft.userErrorMessage = action.error
        break;
      case SEARCH_USERS:
        draft.searchLoading = true,
          draft.searchError = false,
          draft.searchErrorMessage = ''
        break;
      case SEARCH_USERS_SUCCESS:
        draft.searchLoading = false,
          draft.searchError = false,
          draft.searchErrorMessage = ''
        draft.users = action.users
        break;
      case SEARCH_USERS_FAILURE:
        draft.searchLoading = false,
          draft.searchError = true,
          draft.searchErrorMessage = action.error
        break;
      case CHANGE_USER_NAME:
        draft.username = action.username
        break;
    }
  });

export default usersReducer;
