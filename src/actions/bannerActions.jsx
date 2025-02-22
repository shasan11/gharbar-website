
import axios from 'axios';

export const FETCH_BANNERS_REQUEST = 'FETCH_BANNERS_REQUEST';
export const FETCH_BANNERS_SUCCESS = 'FETCH_BANNERS_SUCCESS';
export const FETCH_BANNERS_FAILURE = 'FETCH_BANNERS_FAILURE';

export const fetchBanners = () => async (dispatch) => {
  dispatch({ type: FETCH_BANNERS_REQUEST });
  try {
    const response = await axios.get(import.meta.VITE_APP_BACKEND_URL+'/banners'); 
    dispatch({
      type: FETCH_BANNERS_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: FETCH_BANNERS_FAILURE,
      payload: error.message,
    });
  }
};