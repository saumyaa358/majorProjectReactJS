import React from 'react';
import './home.css'
import Hero from '../../components/hero/Hero';
import LatestCollection from '../../components/latestCollection/LatestCollection';
import BestSeller from '../../components/bestSeller/BestSeller';
import OurPolicies from '../../components/ourPolicies/OurPolicies';
import Subscribe from '../../components/subscribe/Subscribe';

const Home = () => {
  return (
    <>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicies />
    <Subscribe />
    
    </>
  )
}

export default Home