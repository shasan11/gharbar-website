// bannerReducers.js

import {
    FETCH_BANNERS_REQUEST,
    FETCH_BANNERS_SUCCESS,
    FETCH_BANNERS_FAILURE,
  } from '../actions/bannerActions';
  
  const initialState = {
    banners: [], // List of banners
    loading: false, // Loading state
    error: null, // Error message
  };
  
  const bannerReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BANNERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_BANNERS_SUCCESS:
        return {
          ...state,
          loading: false,
          banners: action.payload, // Store fetched banners
        };
      case FETCH_BANNERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bannerReducers;