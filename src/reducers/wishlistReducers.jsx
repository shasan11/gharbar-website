import {
    FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILURE,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    ADD_TO_WISHLIST_FAILURE,
    REMOVE_FROM_WISHLIST_REQUEST,
    REMOVE_FROM_WISHLIST_SUCCESS,
    REMOVE_FROM_WISHLIST_FAILURE,
  } from '../actions/wishlistActions';
  const initialState = {
    wishlist: [], 
    loading: false, 
    error: null, 
  };
  const wishlistReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WISHLIST_REQUEST:
      case ADD_TO_WISHLIST_REQUEST:
      case REMOVE_FROM_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          wishlist: action.payload, 
        };
      case ADD_TO_WISHLIST_SUCCESS:
      case REMOVE_FROM_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          wishlist: action.payload, 
        };
      case FETCH_WISHLIST_FAILURE:
      case ADD_TO_WISHLIST_FAILURE:
      case REMOVE_FROM_WISHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default wishlistReducers;