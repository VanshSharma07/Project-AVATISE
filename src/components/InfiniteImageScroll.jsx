import React from 'react';

const InfiniteImageScroll = ({ images }) => {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="flex animate-scroll">
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Scrolling image ${index + 1}`}
            className="h-100 w-auto object-cover mx-6"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageScroll;