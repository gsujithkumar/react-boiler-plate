/*
 * Users Messages
 *
 * This contains all the text for the Users container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Users';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Random Users from internet',
  },
  userNameMessage: {
    id: `${scope}.userNameMessage`,
    defaultMessage: 'Search for the People with either first name or last name',
  },
  userNameAtPrefix: {
    id: `${scope}.userNameAtPrefix`,
    defaultMessage: 'Search Text',
  }
});
