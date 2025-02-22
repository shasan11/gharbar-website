
import {
    FETCH_FLASH_SALE_REQUEST,
    FETCH_FLASH_SALE_SUCCESS,
    FETCH_FLASH_SALE_FAILURE,
  } from '../actions/flashSaleActions';
  const initialState = {
    flashSale: [], 
    loading: false, 
    error: null, 
  };
  const flashSaleReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FLASH_SALE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_FLASH_SALE_SUCCESS:
        return {
          ...state,
          loading: false,
          flashSale: action.payload, 
        };
      case FETCH_FLASH_SALE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default flashSaleReducers;