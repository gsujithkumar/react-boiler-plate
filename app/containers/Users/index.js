/**
 *
 * Users
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeUsersSelector, makeSearchUserSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadUsers, searchUser, onChangeUsername } from './actions'
import UserDisplay from '../../components/UserDisplay'
import styled from 'styled-components';
export function Users({
  users,
  loadUsers,
  searchUser,
  username,
  onChangeUsername,
  onSubmitForm,
  clearSearch
}) {
  useInjectReducer({ key: 'users', reducer });
  useInjectSaga({ key: 'users', saga });

  const Form = styled.form`
  margin-bottom: 1em;
`;
  const AtPrefix = styled.span`
  color: black;
  margin-left: 0.4em;
`;

  const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px dotted #999;
  background-color: transparent;
  padding-left: 15px;
  width:200px;
`;
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    loadUsers()
  }, []);

  return (
    <div>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="Description of Users" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}

      <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <FormattedMessage {...messages.userNameMessage} />
          <br />
          <AtPrefix>
            <FormattedMessage {...messages.userNameAtPrefix} />
          </AtPrefix>

          <Input
            id="username"
            type="text"
            placeholder="First Name or Last Name"
            value={username}
            onChange={onChangeUsername}
          />
          <button type="button" onClick={clearSearch}>clear</button>
        </label>
      </Form>


      {users && <UserDisplay users={users} />}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  users: makeUsersSelector(),
  username: makeSearchUserSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
    searchUser: () => dispatch(searchUser()),
    onChangeUsername: (event) => dispatch(onChangeUsername(event.target.value)),
    onSubmitForm: (event) => {
      if (event !== undefined && event.preventDefault) event.preventDefault();
      dispatch(searchUser())
    },
    clearSearch: () => dispatch(loadUsers())

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Users);
