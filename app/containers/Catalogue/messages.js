/*
 * Catalogue Messages
 *
 * This contains all the text for the Catalogue container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Catalogue';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Catalogue container!',
  },
});
