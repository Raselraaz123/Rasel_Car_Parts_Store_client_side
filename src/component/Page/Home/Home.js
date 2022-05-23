import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurProduct from './OurProduct';
import Review from './Review';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurProduct></OurProduct>
      <BusinessSummary></BusinessSummary>
      <Review></Review>
    </div>
  );
};

export default Home;