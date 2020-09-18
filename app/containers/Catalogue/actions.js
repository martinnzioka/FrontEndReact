/*
 *
 * Catalogue actions
 *
 */

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

export function loadFeaturedItems() {
  return {
    type: FEATURED_ITEMS,
  };
}

export function loadFeaturedItemsSuccess(featuredItems) {
  return {
    type: FEATURED_ITEMS_SUCCESS,
    featuredItems,
  };
}
export function loadFeaturedItemsError(error) {
  return {
    type: FEATURED_ITEMS_ERROR,
    error,
  };
}
export function loadCategories() {
  return {
    type: CATEGORIES,
  };
}
export function loadCategoriesSucces(categories) {
  return {
    type: CATEGORIES_SUCCESS,
    categories,
  };
}
export function loadCategoriesError(error) {
  return {
    type: CATEGORIES_ERROR,
    error,
  };
}
export function loadCategotyItem() {
  return {
    type: CATEGORY_ITEM,
  };
}
export function loadCategotyItemSucces(categoryItem) {
  return {
    type: CATEGORY_ITEM_SUCCESS,
    categoryItem,
  };
}
export function loadCategotyItemError(error) {
  return {
    type: CATEGORY_ITEM_ERROR,
    error,
  };
}
