/**
 *
 * Asynchronously loads the component for Catalogue
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
