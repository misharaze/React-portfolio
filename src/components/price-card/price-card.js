import React from 'react';
import './price-card.scss'

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <span> A partir de  </span>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;