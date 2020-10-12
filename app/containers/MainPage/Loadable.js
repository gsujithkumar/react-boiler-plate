/**
 *
 * Asynchronously loads the component for MainForm
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
