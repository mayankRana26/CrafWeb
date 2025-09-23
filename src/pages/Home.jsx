import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
// import MainSections from '../components/MainSections'; // इस लाइन को हटा दें
import Popup from '../components/Popup';
import WhyChooseUs from '../components/WhyChooseUs';
import ScrollToTopArrow from '../components/ScrollToTopArrow';

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      {/* <MainSections /> यहाँ से भी हटा दें */}
      <Popup />
      <ScrollToTopArrow />
    </>
  );
}

export default Home;