// productReducers.js

import {
    FETCH_LATEST_PRODUCTS_REQUEST,
    FETCH_LATEST_PRODUCTS_SUCCESS,
    FETCH_LATEST_PRODUCTS_FAILURE,
    FETCH_DISCOUNTED_PRODUCTS_REQUEST,
    FETCH_DISCOUNTED_PRODUCTS_SUCCESS,
    FETCH_DISCOUNTED_PRODUCTS_FAILURE,
    SEARCH_PRODUCTS_REQUEST,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_DETAILS_REQUEST,
    FETCH_PRODUCT_DETAILS_SUCCESS,
    FETCH_PRODUCT_DETAILS_FAILURE,
    FETCH_RELATED_PRODUCTS_REQUEST,
    FETCH_RELATED_PRODUCTS_SUCCESS,
    FETCH_RELATED_PRODUCTS_FAILURE,
    FETCH_PRODUCT_REVIEWS_REQUEST,
    FETCH_PRODUCT_REVIEWS_SUCCESS,
    FETCH_PRODUCT_REVIEWS_FAILURE,
    FETCH_PRODUCT_RATING_REQUEST,
    FETCH_PRODUCT_RATING_SUCCESS,
    FETCH_PRODUCT_RATING_FAILURE,
    SUBMIT_PRODUCT_REVIEW_REQUEST,
    SUBMIT_PRODUCT_REVIEW_SUCCESS,
    SUBMIT_PRODUCT_REVIEW_FAILURE,
    FETCH_NEW_ARRIVAL_PRODUCTS_REQUEST,
    FETCH_NEW_ARRIVAL_PRODUCTS_SUCCESS,
    FETCH_NEW_ARRIVAL_PRODUCTS_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    latestProducts: [],
    discountedProducts: [],
    searchResults: [],
    productDetails: null,
    relatedProducts: [],
    productReviews: [],
    productRating: null,
    newArrivalProducts: [],
    loading: false,
    error: null,
  };
  
  const productReducers = (state = initialState, action) => {
    switch (action.type) {
      // Latest Products
      case FETCH_LATEST_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_LATEST_PRODUCTS_SUCCESS:
        return { ...state, loading: false, latestProducts: action.payload };
      case FETCH_LATEST_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Discounted Products
      case FETCH_DISCOUNTED_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DISCOUNTED_PRODUCTS_SUCCESS:
        return { ...state, loading: false, discountedProducts: action.payload };
      case FETCH_DISCOUNTED_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Search Products
      case SEARCH_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case SEARCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, searchResults: action.payload };
      case SEARCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Product Details
      case FETCH_PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCT_DETAILS_SUCCESS:
        return { ...state, loading: false, productDetails: action.payload };
      case FETCH_PRODUCT_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Related Products
      case FETCH_RELATED_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_RELATED_PRODUCTS_SUCCESS:
        return { ...state, loading: false, relatedProducts: action.payload };
      case FETCH_RELATED_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Product Reviews
      case FETCH_PRODUCT_REVIEWS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCT_REVIEWS_SUCCESS:
        return { ...state, loading: false, productReviews: action.payload };
      case FETCH_PRODUCT_REVIEWS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Product Rating
      case FETCH_PRODUCT_RATING_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCT_RATING_SUCCESS:
        return { ...state, loading: false, productRating: action.payload };
      case FETCH_PRODUCT_RATING_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // Submit Product Review
      case SUBMIT_PRODUCT_REVIEW_REQUEST:
        return { ...state, loading: true, error: null };
      case SUBMIT_PRODUCT_REVIEW_SUCCESS:
        return { ...state, loading: false };
      case SUBMIT_PRODUCT_REVIEW_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // New Arrival Products
      case FETCH_NEW_ARRIVAL_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_NEW_ARRIVAL_PRODUCTS_SUCCESS:
        return { ...state, loading: false, newArrivalProducts: action.payload };
      case FETCH_NEW_ARRIVAL_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default productReducers;