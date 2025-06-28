import React, { useState } from 'react';
import './Faq.scss';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData = [
    {
      question: "Quelles services vous proposez ?",
      answer: "Je propose un  large choix de mode de développement , des sites adaptés à tout types d'écran , sites web , optimisation pour les moteurs de recherche (SEO)."
    },
    {
      question: "Combien de temps pour créer un site web  ?",
      answer: "Cela dépend de la compléxité du projet , mais en régle général cela prend 2 à 4 semaines."
    },
    {
      question: "Combien coutent le prix d'un site web ?",
      answer: "Le coût dépend de l'étendue des travaux et des exigences. Veuillez consulter ma page de tarification pour plus de détails"
    },
    {
      question: "Quelles outils utilisez vous au quotidien ?",
      answer: "J'utilise des technologies modernes telles que HTML5, CSS3, JavaScript, React, Node.js , MongoDB et postgreSQL pour développer des applications dynamiques et interactives.."
    },
    {
      question: "Comment vous travailler avec vos clients ?",
      answer: "Je propose une approche individuelle, en discutant de tous les détails et souhaits du client avant de commencer le développement. Vous pourrez voir l’avancement de votre travail et apporter des modifications."
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title"> Questions le plus souvents posées</h2>
      <div className="faq-content">
        {faqData.map((item, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-question" onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'faq-answer show' : 'faq-answer'}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
