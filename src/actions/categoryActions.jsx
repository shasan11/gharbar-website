import axios from 'axios';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CHILD_CATEGORIES_REQUEST = 'FETCH_CHILD_CATEGORIES_REQUEST';
export const FETCH_CHILD_CATEGORIES_SUCCESS = 'FETCH_CHILD_CATEGORIES_SUCCESS';
export const FETCH_CHILD_CATEGORIES_FAILURE = 'FETCH_CHILD_CATEGORIES_FAILURE';
export const FETCH_PRODUCTS_BY_CATEGORY_REQUEST = 'FETCH_PRODUCTS_BY_CATEGORY_REQUEST';
export const FETCH_PRODUCTS_BY_CATEGORY_SUCCESS = 'FETCH_PRODUCTS_BY_CATEGORY_SUCCESS';
export const FETCH_PRODUCTS_BY_CATEGORY_FAILURE = 'FETCH_PRODUCTS_BY_CATEGORY_FAILURE';
export const FETCH_FEATURED_CATEGORIES_REQUEST = 'FETCH_FEATURED_CATEGORIES_REQUEST';
export const FETCH_FEATURED_CATEGORIES_SUCCESS = 'FETCH_FEATURED_CATEGORIES_SUCCESS';
export const FETCH_FEATURED_CATEGORIES_FAILURE = 'FETCH_FEATURED_CATEGORIES_FAILURE';

const fetchChildCategories = async (categoryId) => {
  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/categories/childes/${categoryId}`);
    const childCategories = response.data;
    const nestedChildCategories = await Promise.all(
      childCategories.map(async (child) => {
        const children = await fetchChildCategories(child.id);
        return { ...child, children };
      })
    );
    return nestedChildCategories;
  } catch (error) {
    console.error(`Error fetching child categories for category ${categoryId}:`, error);
    return [];
  }
};
export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'/categories/');
    const categories = response.data;
    const categoriesWithChildren = await Promise.all(
      categories.map(async (category) => {
        const children = await fetchChildCategories(category.id);
        return { ...category, children };
      })
    );
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categoriesWithChildren,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: error.message,
    });
  }
};
export const fetchProductsByCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY_REQUEST });
  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+`/categories/products/${categoryId}`);
    dispatch({
      type: FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};
export const fetchFeaturedCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_FEATURED_CATEGORIES_REQUEST });
  try {
    const response = await axios.get(import.meta.env.VITE_APP_BACKEND_URL+'/categories/featured');
    dispatch({
      type: FETCH_FEATURED_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FEATURED_CATEGORIES_FAILURE,
      payload: error.message,
    });
  }
};