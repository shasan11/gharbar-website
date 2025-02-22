import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLatestProducts,
  fetchDiscountedProducts,
  fetchNewArrivalProducts,
} from './actions/productActions';
import { fetchConfig } from './actions/configActions';

const App = () => {
  const dispatch = useDispatch();

  const {
    latestProducts,
    discountedProducts,
    newArrivalProducts,
    loading,
    error,
  } = useSelector((state) => state.products);

   useEffect(() => {
    dispatch(fetchLatestProducts());
    dispatch(fetchDiscountedProducts());
    dispatch(fetchNewArrivalProducts());
    dispatch(fetchConfig());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Latest Products</h1>
      <ul>
        {latestProducts && latestProducts.length > 0 ? (
          latestProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <li>No latest products available.</li>
        )}
      </ul>

      <h1>Discounted Products</h1>
      <ul>
        {discountedProducts && discountedProducts.length > 0 ? (
          discountedProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <li>No discounted products available.</li>
        )}
      </ul>

      <h1>New Arrival Products</h1>
      <ul>
        {newArrivalProducts && newArrivalProducts.length > 0 ? (
          newArrivalProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <li>No new arrival products available.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
