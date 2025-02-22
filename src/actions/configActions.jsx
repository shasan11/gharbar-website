

import axios from 'axios';


export const FETCH_CONFIG_REQUEST = 'FETCH_CONFIG_REQUEST';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_FAILURE = 'FETCH_CONFIG_FAILURE';


export const fetchConfig = () => async (dispatch) => {
  dispatch({ type: FETCH_CONFIG_REQUEST });

  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'/config'); 
    console.log("Config COre",response);
    dispatch({
      type: FETCH_CONFIG_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: FETCH_CONFIG_FAILURE,
      payload: error.message,
    });
  }
};