/**
 *
 * Asynchronously loads the component for UserDisplay
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
