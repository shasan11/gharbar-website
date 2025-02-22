// configReducers.js

import {
    FETCH_CONFIG_REQUEST,
    FETCH_CONFIG_SUCCESS,
    FETCH_CONFIG_FAILURE,
  } from '../actions/configActions';
  
  const initialState = {
    config: null, // Config data
    loading: false, // Loading state
    error: null, // Error message
  };
  
  const configReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CONFIG_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CONFIG_SUCCESS:
        return {
          ...state,
          loading: false,
          config: action.payload, // Store fetched config data
        };
      case FETCH_CONFIG_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default configReducers;