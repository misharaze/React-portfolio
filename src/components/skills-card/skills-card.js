import React from 'react';
import './skills-card.scss'; 

const Card = ({ title, items }) => {
  return (
    <div className="skills-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="lightning">⚡</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;