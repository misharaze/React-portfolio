import './skills.scss'
import Card from '../components/skills-card/skills-card';
import { useState , useRef, useEffect} from 'react';

const Projects = () => {
    const ratingsRef = useRef(null);
    const [animate, setAnimate] = useState(false)

    const cardData = [
        { title: "Réalisation de projets", items: ["site vitrine", "site e-commerce", "applications mobile"] },
        { title: "Applications et interface administrateurs", items: ["PostgreSQL", "Node.js", "MongoDB","pgAdmin"] },
        { title: "Validation W3C et référencement naturel SEO ", items: ["accesibilité ", "practicité", "ergonomie"] },
        { title: "Code réaliser à la main ", items: ["Performance", "Personnalisation", "sécurité"] },
        { title: "Adaptabilité à tout les supports (responsive design)", items: ["tablettes", "téléphone mobile", "ordinateur "] },
       
      ];
      useEffect(() => {
        const node = ratingsRef.current; // Capture the ref value
      
        if (!node) return;
      
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setAnimate(true);
                observer.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
      
        observer.observe(node);
      
        return () => {
          observer.unobserve(node); // Use captured node
        };
      }, []);
      
    
      const ratingValues = [
        { label: "Créations de sites Web", value: "100%", title: "Créations de sites Web",items: ["site vitrine", "site e-commerce", "applications mobile"] },
        { label: "Créations d'applications mobiles ", value: "70%",  title: "Créations d'applications mobiles ", },
        { label: "Design Web", value: "60%", title: "Design web ", },
        { label: "Référencement internet", value: "100%", title: "Code réalisé à la main"},
        { label: "Sites e-commerce", value: "70%", title: 'Sites e-commerce' },
        { label: "Site vitrine (une page)", value: "100%", title : 'Site vitrine ' },
      ];
    

    return ( 

<main className="section">
        <div className="container">
            <h2 className="title-skills"> Mes Compétences</h2>

          
        </div>
       <h3 className="subtitle-skills"> Les compétences que j'ai acquis et comment je peux vous aider à réaliser vos projets </h3>
    <div className="title-3">Mes domaines de compétences</div>

    <div className="card-container">
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} items={data.items} />
      ))}
    </div>

    <div className="container2">
        <div className="title-ratings">Mes compétences Générales</div>

        <div className="skills__ratings" ref={ratingsRef}>
          {ratingValues.map((item, idx) => (
            <div key={idx} className="skills__ratings-item">
              <div className="title title_fz14 skills__ratings-title">{item.title}</div>
              <div className="skills__ratings-counter">{item.value}</div>
              <div className="skills__ratings-line">
                <span
                  style={{
                    width: animate ? item.value : '0%',
                    transition: 'width 2s ease',
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
  );
};
 
export default Projects;