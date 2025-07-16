import './Price.scss';
import PriceCard from '../components/price-card/price-card';
import { useNavigate } from 'react-router-dom';

const prices = [
  {
    plan: 'Site vitrine',
    price: 'à partir de 390 €',
    features: [
      'Présence en ligne professionnelle',
      'Formulaire de contact intégré',
      'SEO de base',
      'Jusqu’à 3 sections>'
    ]
  },

  {
    plan: 'Site multipages',
    price: 'à partir de 890 €',
    features: [
      'Jusqu’à 6 pages personnalisées',
      'Design responsive pour tous les écrans',
      'SEO optimisé',
      'Connexion aux outils d’analyse'
    ]
  },
  {
    plan: 'Site sur mesure',
    price: 'sur devis',
    features: [
      'Design et fonctionnalités 100% personnalisés',
      'Pages illimitées',
      'Support technique prioritaire',
      'Optimisation avancée des performances'
    ]
  },
  {
    plan: 'Site e-commerce',
    price: 'à partir de 1490 €',
    features: [
      'Boutique en ligne complète',
      'Système de paiement sécurisé',
      'Interface UI/UX soignée',
      'Gestion des produits & newsletter'
    ]
  }
];



const Price = () => {
const navigate = useNavigate()

const handleSelectPlan = (plan) => {
navigate('/contact', {state : {selectedPlan: plan }})


};

    return ( 
<>
<main className="section">
        <div className="container">
            <h2 className="title-price">Prix</h2>
          
        </div>
       <h3 className='subtitle-price'> Voici les tarifs que je pratique </h3>
   
       </main>


   
<div className="pricing-container">
{prices.map((price, index) => (
  <div style={{'--i': index}} key={index}>
  <PriceCard 
    key={index}
    plan={price.plan}
    price={price.price}
    features={price.features}
    onSelect={() => handleSelectPlan(`${price.plan} - ${price.price}`)}
  />
        


  </div>
))}
</div>

</>
     );
}
export default Price;