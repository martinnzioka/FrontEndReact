import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the catalogue state domain
 */

const selectCatalogueDomain = state => state.catalogue || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Catalogue
 */

const makeSelectCatalogue = () =>
  createSelector(
    selectCatalogueDomain,
    substate => substate,
  );

export default makeSelectCatalogue;
export { selectCatalogueDomain };
