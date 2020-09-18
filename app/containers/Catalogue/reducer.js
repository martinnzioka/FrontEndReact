/*
 *
 * Catalogue reducer
 *
 */
import produce from 'immer';
import {
  FEATURED_ITEMS,
  FEATURED_ITEMS_SUCCESS,
  FEATURED_ITEMS_ERROR,
  CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  CATEGORY_ITEM,
  CATEGORY_ITEM_SUCCESS,
  CATEGORY_ITEM_ERROR,
} from './constants';

export const initialState = {
  featuredItems: [],
  categories: [],
  categoryItem: [],
  loadingFeaturedItem: false,
  loadingCategories: false,
  loadingCategoryItem: false,
  errorFeaturedItems: false,
  errorCategories: false,
  errorCategoryItem: false,
};

/* eslint-disable default-case, no-param-reassign */
const catalogueReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FEATURED_ITEMS:
        return state
          .set('loadingFeaturedItem', true)
          .set('errorFeaturedItem', false);
      case FEATURED_ITEMS_SUCCESS:
        return state
          .set('loadingFeaturedItem', false)
          .set('errorFeaturedItem', false)
          .set('featuredItems', action.featuredItems);
      case FEATURED_ITEMS_ERROR:
        return state
          .set('loadingFeaturedItem', false)
          .set('errorFeaturedItem', action.error);
      case CATEGORIES:
        return state
          .set('loadingCategories', true)
          .set('errorCategories', false);
      case CATEGORIES_SUCCESS:
        return state
          .set('loadingCategories', false)
          .set('errorCategories', false)
          .set('categories', action.categories);
      case CATEGORIES_ERROR:
        return state
          .set('loadingCategories', false)
          .set('errorCategories', action.error);
      case CATEGORY_ITEM:
        return state
          .set('loadingCategoryItem', true)
          .set('errorCategoryItem', false);
      case CATEGORY_ITEM_SUCCESS:
        return state
          .set('loadingCategoryItem', false)
          .set('errorCategoryItem', false)
          .set('categoryItem', action.categoryItem);
      case CATEGORY_ITEM_ERROR:
        return state
          .set('loadingCategoryItem', false)
          .set('errorCategoryItem', action.error);
      default:
        return state;
    }
  });

export default catalogueReducer;
