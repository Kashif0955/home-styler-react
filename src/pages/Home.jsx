import React from 'react';
import Header from '../components/Header';
import Services from './Services';
import ProfessionalServices from './ProfessionalServices';
import Gallery from './Gallery';
import Team from './Team';
import Testimonials from './Testimonials';
import Banner from './Banner';
import Slider from '../components/Slider'
import Blog from './Blog';
import FunFacts from './OdoMeter';
// import SliderComponent from '../components/SliderComponent'; 
const Home = () => {
  return (
    <>
    <div className='main ' style={{
      background:"#12151A"
    }}>
      <Header />
      <Slider />
      <Services />

      <ProfessionalServices />
      <Gallery />
      <FunFacts/>
      <Team />
      <Testimonials />
      <Banner />

      <Blog/>
      </div>
    </>
  );
};

export default Home;
