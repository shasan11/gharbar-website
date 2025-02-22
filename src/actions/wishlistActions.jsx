import axios from 'axios';
export const FETCH_WISHLIST_REQUEST = 'FETCH_WISHLIST_REQUEST';
export const FETCH_WISHLIST_SUCCESS = 'FETCH_WISHLIST_SUCCESS';
export const FETCH_WISHLIST_FAILURE = 'FETCH_WISHLIST_FAILURE';
export const ADD_TO_WISHLIST_REQUEST = 'ADD_TO_WISHLIST_REQUEST';
export const ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS';
export const ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE';
export const REMOVE_FROM_WISHLIST_REQUEST = 'REMOVE_FROM_WISHLIST_REQUEST';
export const REMOVE_FROM_WISHLIST_SUCCESS = 'REMOVE_FROM_WISHLIST_SUCCESS';
export const REMOVE_FROM_WISHLIST_FAILURE = 'REMOVE_FROM_WISHLIST_FAILURE';
export const fetchWishlist = () => async (dispatch) => {
  dispatch({ type: FETCH_WISHLIST_REQUEST });
  try {
    const response = await axios.get(import.meta.VITE_APP_BACKEND_URL+'/customer/wish-list'); 
    dispatch({
      type: FETCH_WISHLIST_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: FETCH_WISHLIST_FAILURE,
      payload: error.message,
    });
  }
};
export const addToWishlist = (productId) => async (dispatch) => {
  dispatch({ type: ADD_TO_WISHLIST_REQUEST });
  try {
    const response = await axios.post(import.meta.VITE_APP_BACKEND_URL+'/customer/wish-list/add', { productId }); 
    dispatch({
      type: ADD_TO_WISHLIST_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_WISHLIST_FAILURE,
      payload: error.message,
    });
  }
};
export const removeFromWishlist = (productId) => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });
  try {
    const response = await axios.delete(import.meta.VITE_APP_BACKEND_URL+`/customer/wish-list/remove/${productId}`); 
    dispatch({
      type: REMOVE_FROM_WISHLIST_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_WISHLIST_FAILURE,
      payload: error.message,
    });
  }
};