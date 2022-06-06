import React from 'react';
import Footer from '../../shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurProduct from './OurProduct';
import Review from './Review';

const Home = () => {
  // this is home page
  return (
    <div>
      <Banner></Banner>
      <OurProduct></OurProduct>
      <BusinessSummary></BusinessSummary>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;