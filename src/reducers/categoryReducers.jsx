import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_PRODUCTS_BY_CATEGORY_REQUEST,
    FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
    FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
    FETCH_FEATURED_CATEGORIES_REQUEST,
    FETCH_FEATURED_CATEGORIES_SUCCESS,
    FETCH_FEATURED_CATEGORIES_FAILURE,
  } from '../actions/categoryActions';
  const initialState = {
    categories: [],
    products: [],
    featuredCategories: [],
    loading: false,
    error: null,
  };
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
      case FETCH_CATEGORIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_BY_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case FETCH_PRODUCTS_BY_CATEGORY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  const featuredCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FEATURED_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_FEATURED_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          featuredCategories: action.payload,
        };
      case FETCH_FEATURED_CATEGORIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  const rootCategoryReducer = {
    categories: categoryReducer,
    products: productReducer,
    featuredCategories: featuredCategoryReducer,
  };
  export default rootCategoryReducer;