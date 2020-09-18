/**
 *
 * Catalogue
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCatalogue from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Catalogue() {
  useInjectReducer({ key: 'catalogue', reducer });
  useInjectSaga({ key: 'catalogue', saga });

  return (
    <div>
      <Helmet>
        <title>Catalogue</title>
        <meta name="description" content="Description of Catalogue" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Catalogue.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogue: makeSelectCatalogue(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Catalogue);
