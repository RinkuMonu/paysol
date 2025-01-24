import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shimmer.css'; // Add custom CSS for shimmer effect

const ShimmerUI = () => {
  return (
    <div className="container mt-4">
      <div className="shimmer-wrapper">
        <div className="shimmer-line w-100 mb-2"></div>
        <div className="shimmer-line w-75 mb-2"></div>
        <div className="shimmer-line w-50 mb-2"></div>
        <div className="shimmer-line w-100 mb-2"></div>
        <div className="d-flex gap-3">
          <div className="shimmer-line w-25"></div>
          <div className="shimmer-line w-25"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
