import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import AboutUs from '../components/AboutUs';
import Popular from '../components/Popular';



const Home = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <AboutUs />
        <Popular />
    </div>
  )
}

export default Home