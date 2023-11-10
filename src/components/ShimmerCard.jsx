import React from 'react';
import './ShimmerCard.css'; // You can style the shimmer effect in a CSS file

function ShimmerCard() {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-content">
        <div className="shimmer-title"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-text"></div>
        <div className="shimmer-text"></div>

      </div>
    </div>
  );
}

export default ShimmerCard;
