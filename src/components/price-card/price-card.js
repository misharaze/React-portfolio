import './price-card.scss';
import { FaArrowRight } from 'react-icons/fa';

const PriceCard = ({ plan, price, features, onSelect }) => {
  return (
    <div className="price-card">
      <h3 className="plan">{plan}</h3>
      <p className="price">{price}</p>
      <ul className="features">
        {features.map((feat, i) => (
          <li key={i}>
            <FaArrowRight className="icon" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      <button className="select-btn" onClick={onSelect}>
        Me contacter
      </button>
    </div>
  );
};

export default PriceCard;