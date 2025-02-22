// productActions.js

import axios from 'axios';

// Action Types
export const FETCH_LATEST_PRODUCTS_REQUEST = 'FETCH_LATEST_PRODUCTS_REQUEST';
export const FETCH_LATEST_PRODUCTS_SUCCESS = 'FETCH_LATEST_PRODUCTS_SUCCESS';
export const FETCH_LATEST_PRODUCTS_FAILURE = 'FETCH_LATEST_PRODUCTS_FAILURE';

export const FETCH_DISCOUNTED_PRODUCTS_REQUEST = 'FETCH_DISCOUNTED_PRODUCTS_REQUEST';
export const FETCH_DISCOUNTED_PRODUCTS_SUCCESS = 'FETCH_DISCOUNTED_PRODUCTS_SUCCESS';
export const FETCH_DISCOUNTED_PRODUCTS_FAILURE = 'FETCH_DISCOUNTED_PRODUCTS_FAILURE';

export const SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_DETAILS_REQUEST = 'FETCH_PRODUCT_DETAILS_REQUEST';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_FAILURE = 'FETCH_PRODUCT_DETAILS_FAILURE';

export const FETCH_RELATED_PRODUCTS_REQUEST = 'FETCH_RELATED_PRODUCTS_REQUEST';
export const FETCH_RELATED_PRODUCTS_SUCCESS = 'FETCH_RELATED_PRODUCTS_SUCCESS';
export const FETCH_RELATED_PRODUCTS_FAILURE = 'FETCH_RELATED_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_REVIEWS_REQUEST = 'FETCH_PRODUCT_REVIEWS_REQUEST';
export const FETCH_PRODUCT_REVIEWS_SUCCESS = 'FETCH_PRODUCT_REVIEWS_SUCCESS';
export const FETCH_PRODUCT_REVIEWS_FAILURE = 'FETCH_PRODUCT_REVIEWS_FAILURE';

export const FETCH_PRODUCT_RATING_REQUEST = 'FETCH_PRODUCT_RATING_REQUEST';
export const FETCH_PRODUCT_RATING_SUCCESS = 'FETCH_PRODUCT_RATING_SUCCESS';
export const FETCH_PRODUCT_RATING_FAILURE = 'FETCH_PRODUCT_RATING_FAILURE';

export const SUBMIT_PRODUCT_REVIEW_REQUEST = 'SUBMIT_PRODUCT_REVIEW_REQUEST';
export const SUBMIT_PRODUCT_REVIEW_SUCCESS = 'SUBMIT_PRODUCT_REVIEW_SUCCESS';
export const SUBMIT_PRODUCT_REVIEW_FAILURE = 'SUBMIT_PRODUCT_REVIEW_FAILURE';

export const FETCH_NEW_ARRIVAL_PRODUCTS_REQUEST = 'FETCH_NEW_ARRIVAL_PRODUCTS_REQUEST';
export const FETCH_NEW_ARRIVAL_PRODUCTS_SUCCESS = 'FETCH_NEW_ARRIVAL_PRODUCTS_SUCCESS';
export const FETCH_NEW_ARRIVAL_PRODUCTS_FAILURE = 'FETCH_NEW_ARRIVAL_PRODUCTS_FAILURE';

// Action Creators

// Fetch Latest Products
export const fetchLatestProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_LATEST_PRODUCTS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'/products/latest');
    console.warn(response);
    dispatch({
      type: FETCH_LATEST_PRODUCTS_SUCCESS,
      payload: response.data.products,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LATEST_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

// Fetch Discounted Products
export const fetchDiscountedProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_DISCOUNTED_PRODUCTS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'/products/discounted');
    dispatch({
      type: FETCH_DISCOUNTED_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DISCOUNTED_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

// Search Products
export const searchProducts = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCTS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/products/search?query=${query}`);
    dispatch({
      type: SEARCH_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

// Fetch Product Details
export const fetchProductDetails = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_DETAILS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/products/details/${id}`);
    dispatch({
      type: FETCH_PRODUCT_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_DETAILS_FAILURE,
      payload: error.message,
    });
  }
};

// Fetch Related Products
export const fetchRelatedProducts = (productId) => async (dispatch) => {
  dispatch({ type: FETCH_RELATED_PRODUCTS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/products/related-products/${productId}`);
    dispatch({
      type: FETCH_RELATED_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_RELATED_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

// Fetch Product Reviews
export const fetchProductReviews = (productId) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REVIEWS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/products/reviews/${productId}`);
    dispatch({
      type: FETCH_PRODUCT_REVIEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_REVIEWS_FAILURE,
      payload: error.message,
    });
  }
};

// Fetch Product Rating
export const fetchProductRating = (productId) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_RATING_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/products/rating/${productId}`);
    dispatch({
      type: FETCH_PRODUCT_RATING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCT_RATING_FAILURE,
      payload: error.message,
    });
  }
};

// Submit Product Review (Auth Required)
export const submitProductReview = (productId, reviewData) => async (dispatch) => {
  dispatch({ type: SUBMIT_PRODUCT_REVIEW_REQUEST });

  try {
    const response = await axios.post(import.meta.env.VITE_APP_BACKEND_URL+`/products/reviews/submit`, { productId, ...reviewData });
    dispatch({
      type: SUBMIT_PRODUCT_REVIEW_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_PRODUCT_REVIEW_FAILURE,
      payload: error.message,
    });
  }
};

// Fetch New Arrival Products
export const fetchNewArrivalProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_NEW_ARRIVAL_PRODUCTS_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'/products/new-arrival');
    dispatch({
      type: FETCH_NEW_ARRIVAL_PRODUCTS_SUCCESS,
      payload: response.data.products,
    });
  } catch (error) {
    dispatch({
      type: FETCH_NEW_ARRIVAL_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};