import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import AboutUs from '../components/AboutUs';
import Popular from '../components/Popular';
import ItemList from '../components/ItemList';
import Chef from '../components/Chef';
import Location from '../components/Location';
import Testimonial from '../components/Testimonial';
import Track from '../components/Track';
import HomeBlog from '../components/HomeBlog';



const Home = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <AboutUs />
        <Popular />
        <ItemList />
        <Chef />
        <Location />
        <Testimonial />
        <Track />
        <HomeBlog />
    </div>
  )
}

export default Home