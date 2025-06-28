import './Price.scss';
import PriceCard from '../components/price-card/price-card';

const prices = [
    {
      plan: 'Site vitrine',
      price: '500 €',
      features: ['site vitrine', 'Intégration du formulaire de contact', 'Configuration SEO de base', 'Jusqu à 3 pages']
    },
    {
      plan: 'Site mutlipages',
      price: '1250 €',
      features: ['Site Web multipage (jusqu à 5 pages)', 'responsive design adaptable a tout type d écran', 'Optimisation SEO avancée', 'Configuration  analyse de base']
    },
    {
      plan: 'Site sur mesure',
      price: '1800 €',
      features: ['Site Web entièrement personnalisé (pages illimitées)', 'Assistance technique 24h/24 et 7j/7', 'Intégrations API personnalisées', 'Optimisation des performances du site Web',  ]
    },

    {
      plan: 'Site e-commerce',
      price: '3000 €',
      features: ['site e-commerce', 'Intégration de la passerelle de paiement', 'Conception interface utilisateur/UX personnalisée', 'Configuration de la messagerie électronique et de la newsletter', ]
    },
  


];


const Price = () => {

    return ( 
<>
<main className="section">
        <div className="container">
            <h2 className="title-price">Prix</h2>
          
        </div>
       <h3 className='subtitle-price'>   Voici les tarifs que je pratique </h3>
   
       </main>


   
<div className="pricing-container">
{prices.map((price, index) => (
  <PriceCard 
    key={index}
    plan={price.plan}
    price={price.price}
    features={price.features}
  />
))}
</div>

</>
     );
}
export default Price;