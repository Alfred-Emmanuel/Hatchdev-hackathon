// import React from 'react';
import PropTypes from 'prop-types';

const FeaturedProduct = ({ img, title, details }) => {
  return (
    <div className="w-[328px] h-[254px] items-center justify-center mt-9">
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{details}</p>
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
