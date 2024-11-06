import React from 'react'
import InfiniteImageScroll from '../components/InfiniteImageScroll';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import HeroSection from '../components/HeroSection';
import PricingCards from '../components/PricingCards';


const images = [
    'https://images.pexels.com/photos/16004754/pexels-photo-16004754/free-photo-of-woman-and-letters.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7688595/pexels-photo-7688595.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=600',
    // Add more image paths as needed
  ];
function HomePage() {
  return (
    <div>
        <HeroSection/>

        <InfiniteImageScroll images={images} />

        <FeatureSection/>
        <PricingCards/>
        <TestimonialSection/>
    </div>
  )
}

export default HomePage