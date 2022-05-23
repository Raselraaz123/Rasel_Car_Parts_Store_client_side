import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurProduct from './OurProduct';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurProduct></OurProduct>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;