import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import AboutUs from '../components/AboutUs';
import Popular from '../components/Popular';
import ProductCard from '../components/ProductCard';



const Home = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <AboutUs />
        <Popular />
        <ProductCard />
    </div>
  )
}

export default Home