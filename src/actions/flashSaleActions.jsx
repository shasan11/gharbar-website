
import axios from 'axios';

export const FETCH_FLASH_SALE_REQUEST = 'FETCH_FLASH_SALE_REQUEST';
export const FETCH_FLASH_SALE_SUCCESS = 'FETCH_FLASH_SALE_SUCCESS';
export const FETCH_FLASH_SALE_FAILURE = 'FETCH_FLASH_SALE_FAILURE';

export const fetchFlashSale = () => async (dispatch) => {
  dispatch({ type: FETCH_FLASH_SALE_REQUEST });
  try {
    const response = await axios.get(import.meta.VITE_APP_BACKEND_URL+'/flash-sale'); 
    dispatch({
      type: FETCH_FLASH_SALE_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: FETCH_FLASH_SALE_FAILURE,
      payload: error.message,
    });
  }
};