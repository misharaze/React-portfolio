import './skills.scss'
import Card from '../components/skills-card/skills-card';

const Projects = () => {
    const cardData = [
        { title: "Réalisation de projets", items: ["site vitrine", "site e-commerce", "applications mobile"] },
        { title: "Applications et interface administrateurs", items: ["PostgreSQL", "Node.js", "MongoDB","pgAdmin"] },
        { title: "Validation W3C et référencement naturel SEO ", items: ["accesibilité ", "practicité", "ergonomie"] },
        { title: "Code réaliser à la main ", items: ["Performance", "Personnalisation", "sécurité"] },
        { title: "Adaptabilité à tout les supports (responsive design)", items: ["tablettes", "téléphone mobile", "ordinateur "] },
       
      ];
    


    return ( 

<main className="section">
        <div className="container">
            <h2 className="title-skills"> Mes  Compétences</h2>

          
        </div>
       <h3 className="subtitle-skills"> Les compétences que j'ai acquis et comment je peux vous aider à réaliser vos projets </h3>
    <div className="title-3">Mes domaines de compétences</div>

    <div className="card-container">
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} items={data.items} />
      ))}
    </div>


      <div className="container">
        <div className='title-ratings'>Mes compétences Générales</div>
      <div className="skills__ratings">

               <div className="skills__ratings-item">
                   <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
                   <div className="skills__ratings-counter">100%</div>
                   <div className="skills__ratings-line">
                       <span></span>
                   </div>
               </div>
   
               <div className="skills__ratings-item">
                   <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
                   <div className="skills__ratings-counter">80%</div>
                   <div className="skills__ratings-line">
                       <span></span>
                   </div>
               </div>
   
               <div className="skills__ratings-item">
                   <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
                   <div className="skills__ratings-counter">80%</div>
                   <div className="skills__ratings-line">
                       <span></span>
                   </div>
               </div>
   
   
               <div className="skills__ratings-item">
                   <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
                   <div className="skills__ratings-counter">100%</div>
                   <div className="skills__ratings-line">
                       <span></span>
                   </div>
               </div>
   
               <div className="skills__ratings-item">
                   <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
                   <div className="skills__ratings-counter">80%</div>
                   <div className="skills__ratings-line">
                       <span></span>
                   </div>
               </div>
   
               <div className="skills__ratings-item">
                   <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
                   <div className="skills__ratings-counter">80%</div>
                   <div className="skills__ratings-line">
                       <span></span>
                   </div>
               </div>
           </div>
           </div>
           </main>

     );
}
export default Projects;