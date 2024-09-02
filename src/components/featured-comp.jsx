// import React from 'react';
import PropTypes from 'prop-types';

const FeaturedProduct = ({ img, title, details }) => {
  return (
    <div className="mt-4 w-[328px] h-[254px] text-center items-center justify-center">
      <img src={img} alt={title} className='mx-auto flex items-center'/>
      <p className='font-700 pt-3'>{title}</p>
      <p className='font-400 pt-3'>{details}</p>
    </div>
  );
};

// Define PropTypes for the component
FeaturedProduct.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default FeaturedProduct;
