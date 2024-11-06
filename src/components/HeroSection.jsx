import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className="px-4 md:px-0">
      <h1 className="mx-4 md:mx-20 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center mt-10 md:mt-20">
        AVATISE: Make Your First AI-Powered Virtual
      </h1>
      <h1 className="mx-4 md:mx-20 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-center mt-4 md:mt-8">
        Influencer Ad
      </h1>
      <h3 className="text-center mt-6 md:mt-10 font-sans text-base md:text-lg px-4 md:px-0">
        Create engaging influencer campaigns and stunning brand ads with our cutting-edge AI technology.
      </h3>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-10 px-4 md:px-0">
        <button
          onClick={handleGetStartedClick}
          className="rounded-full px-8 md:px-10 py-2.5 md:py-3 bg-red-600 hover:bg-orange-600 text-white font-bold text-sm md:text-base transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;