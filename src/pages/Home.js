import './Home.css';
import {motion } from 'framer-motion'
import { Card } from "react-bootstrap";
import { FaComputer } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa"
import { IoLogoDesignernews } from "react-icons/io";
import AnimatedNumber from "animated-number-react";
import Header from '../components/header/Header'
import {GiCoffeeCup} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io';
import {AiOutlineLike} from 'react-icons/ai';
import {FaAward} from 'react-icons/fa';
import Css from '.././img/icons/css.png';
import Html from '.././img/icons/html.png';
import Express from '.././img/icons/express.png';
import Firebase from '.././img/icons/firebase.png';
import Nodejs from '.././img/icons/node.png';
import Js from '.././img/icons/js.png';
import React from '.././img/icons/react.png';
//import Sequelize from '.././img/icons/sequelize.png'
import Vscode from '.././img/icons/vsCode.png';
import Github from '.././img/icons/github.png';
import Mongodb from '.././img/icons/mongodb.png';
import Webpack from '.././img/icons/webpack.png';
import Postman from '.././img/icons/postman.png';
import Postgres from '.././img/icons/postgres.png';
import Npm from '.././img/icons/npm.png';
import Sass from '.././img/icons/sass.png';
import Bootstrap from '.././img/icons/bootstrap.png';
import Vitrine from '.././img/projects/sitevitrine.jpg'
import Commerce from '.././img/projects/e-commerce.jpg'
import admin from '.././img/projects/pannel admin.png'
import Landing from '.././img/projects/landing2.jpg'
import {SKILLS_ROUTE} from '../utils/consts.js'
import { useNavigate } from 'react-router-dom';
import code from '../img/mobileApp/code.png'
import platforme from '../img/mobileApp/iosandroid.png'
import Design from '../img/mobileApp/uiDesign.png'
import Performance from '../img/mobileApp/performance.png'
const Home = () => {
const navigate = useNavigate()

const handleNavigate = (projects) => {
  // Переход по переданному пути
  navigate('/projects');
};



    return (
        <>
        <Header /> 
      
  
        <section className="about">
  <Card className="about_card">
    <div className="container">
      {/* Блок описания */}
      <div className="about_descr">
        <div className="title title_fz16about about_title">à propos de moi</div>
        <div className="title title_fz36 about_subtitle">je m'appelle misha</div>
        <div className="divider"></div>
        <p className="about_text">
          Développeur web depuis maintenant 3 ans, je suis passionné par l’innovation technologique,
          toujours à la recherche de nouvelles technologies et nouvelles techniques de développement.
          Fasciné par les dernières tendances en développement web, je suis toujours prêt à relever de
          nouveaux défis pour satisfaire au mieux la demande de mon client.
        </p>
      </div>

      {/* Анимация блока скиллов */}
      <motion.div
        className="about_skills"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* Скилл: Web Developer */}
        <div className="about_skills-item">
          <div className="about_skills-circle">
            <FaComputer />
          </div>
          <div className="title title_fz14">web dévellopeur</div>
          <div className="about_skills-text">
            j’ai acquis une expertise solide dans la conception et le développement d’applications web
            et mobiles, maîtrisant des langages tels que HTML, CSS, Bootstrap, WordPress avec Elementor,
            ainsi que node.js pour le côté backend.
          </div>
        </div>

        {/* Скилл: Mobile App */}
        <div className="about_skills-item">
          <div className="about_skills-circle">
            <FaMobileAlt />
          </div>
          <div className="title title_fz14">développement d'application mobile</div>
          <div className="about_skills-text">
            La maîtrise de ces compétences m'a permis de créer des applications réactives, évolutives
            et riches en fonctionnalités qui répondent aux exigences de mes clients.
          </div>
        </div>

        {/* Скилл: UI/UX */}
        <div className="about_skills-item">
          <div className="about_skills-circle">
            <IoLogoDesignernews />
          </div>
          <div className="title title_fz14">UI/UX design</div>
          <div className="about_skills-text">
            UX est l’abréviation d’expérience utilisateur, c’est-à-dire l’impression globale et la
            satisfaction que votre application procure aux utilisateurs. J'ai acquis les compétences
            nécessaires pour concevoir une application attrayante, intuitive, réactive et accessible.
          </div>
        </div>
      </motion.div>
    </div>
  </Card>
</section>

<section className="resume">
    <Card className="about_card">
        <div className="container">
            <h2 className="title title_fz16-resume resume_title-circle">compétences</h2>
            <div className="title title_fz36 resume_subtitle">ce que je pourrais vous apporter</div>
            <div className="divider"></div>

            <div className="resume__wrapper">
                <div className="resume_column">
                    <h3 className="title title_fz20 resume_column-title">Formation intensive</h3>
                    <ul>
                        <li>
                            <div className="resume_item">
                                <div className="resume_item-head">
                                    <div className="resume_item-icon">
                                        <img src="icons/experience/university.svg" alt="university" />
                                    </div>
                                    <h4 className="title title_fz14">ALT-RH CONSULTING</h4>
                                    <div className="resume_item-location">Paris</div>
                                </div>
                                <div className="resume_item-body">
                                    Formation diplômante en Développement Web et Web Mobile : HTML, CSS, JavaScript, React, Node.js, Git. Approche full-stack centrée sur la pratique et l'intégration professionnelle.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="resume_column">
                    <h3 className="title title_fz20 resume_column-title">Formation universitaire</h3>
                    <ul>
                        <li>
                            <div className="resume_item">
                                <div className="resume_item-head">
                                    <div className="resume_item-icon">
                                        <img src="icons/experience/university.svg" alt="university" />
                                    </div>
                                    <h4 className="title title_fz14">Université – Langues étrangères appliquées</h4>
                                    <div className="resume_item-location">Paris</div>
                                </div>
                                <div className="resume_item-body">
                                    Deux ans d'études universitaires en langues et communication interculturelle. Solide capacité d'analyse, de travail autonome et rigueur dans la gestion de projets.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="resume__wrapper">
                <div className="resume_column">
                    <h3 className="title title_fz20 resume_column-title">Autodidacte</h3>
                    <ul>
                        <li>
                            <div className="resume_item">
                                <div className="resume_item-head">
                                    <div className="resume_item-icon">
                                        <img src="icons/experience/skills.svg" alt="skills" />
                                    </div>
                                    <h4 className="title title_fz14">Apprentissage personnel</h4>
                                    <div className="resume_item-location">En ligne</div>
                                </div>
                                <div className="resume_item-body">
                                    Étude approfondie de frameworks modernes (React, Next.js), mise à jour constante de mes compétences via des ressources comme MDN, FreeCodeCamp, et Udemy.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="resume_column">
                    <h3 className="title title_fz20 resume_column-title">Projets personnels</h3>
                    <ul>
                        <li>
                            <div className="resume_item">
                                <div className="resume_item-head">
                                    <div className="resume_item-icon">
                                        <img src="icons/experience/project.svg" alt="project" />
                                    </div>
                                    <h4 className="title title_fz14">Mise en pratique</h4>
                                    <div className="resume_item-location">Projet indépendant</div>
                                </div>
                                <div className="resume_item-body">
                                    Réalisation de plusieurs projets web (sites vitrines, applications React, systèmes de formulaires dynamiques), avec une attention particulière à l'UX/UI et à la responsivité.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Card>
</section>


 <section className='score'>
 <div className="container">
 <div className='first_null_section'>
  
 

          <div id='count_data' className='count_data'>
          <div class="about-counter-area d-flex h-100">
		<div className="container h-100 d-flex align-items-center justify-content-center align-middle">
			<div className="row align-items-center justify-content-center align-middle">
				<div className="col-md-3 text-center">
        <IoIosPeople className='icon_count' size={'60px'}/>

					<div classname="single-counter">
                        <AnimatedNumber className='countNumberA'
                        value={10}
                        formatValue={v=>v.toFixed(0)}
                        duration={7000}
                        />			
                        <p className='countNumber'>client content</p>
					</div>
				</div>

				<div className="col-md-3 text-center">
        <FaAward className='icon_count' size={'60px'}/>


					<div className="single-counter">
                        <AnimatedNumber className='countNumberA'
                        value={5}
                        formatValue={v=>v.toFixed(0)}
                        duration={3000}
                        />							
                        <p className='countNumber'>Site vitrine</p>
					</div>
				</div>

				<div className="col-md-3 col-sm-3 text-center">
        <AiOutlineLike className='icon_count' size={'60px'}/>

					<div className="single-counter">
						<AnimatedNumber className='countNumberA'
                        value={7}
                        formatValue={v=>v.toFixed(0)}
                        duration={2000}
                        />	
						<p className='countNumber'>Site totale </p>
					</div>
				</div>

				<div className="col-md-3 col-sm-3 text-center">
        <GiCoffeeCup className='icon_count' size={'60px'}/>

					<div className="single-counter">
                        <AnimatedNumber className='countNumberA'
                        value={8}
                        formatValue={v=>v.toFixed(0)}
                        duration={5500}
                        />							
                        <p className='countNumber'>Projet accomplis</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>          
  </div>   
  </div>
</section>









   <section className="skills">
  <div className="container">
    <h5 className="title title_fz16-skills skills__title">mes connaissances</h5>

    <div class="title title_fz36 skills__subtitle">les outils dont je me sers au quotidien</div>
    <div class="divider"></div>

  
    <div class="skills__category">
      <h3 class="category__title">Frontend</h3>
      <div class="arrow"></div>
      <div class="skills__items">
        <div class="skills__item">
          <img src={Html} alt="HTML5" />
          <h3 class="title title_fz14">HTML5</h3>

          <p>Rajouter du style en plus de la carcase du site web</p>
        </div>
        <div class="skills__item">
          <img src={Css} alt="CSS3" />
          <h3 class="title title_fz14">CSS3</h3>
          <p> Ajoute du style, aux pages web .</p>
        </div>
        <div class="skills__item">
          <img src={Sass} alt="SASS" />
          <h3 class="title title_fz14">SASS</h3>
          <p>Transcrit le code css pour un gain de temps  .</p>
        </div>
        <div class="skills__item">
          <img src={Js} alt="JavaScript" />
          <h3 class="title title_fz14">JavaScript</h3>
          <p>Permet de créer du contenu dynamque et intérreactif.</p>
        </div>
        <div class="skills__item">
          <img src={Bootstrap} alt="Bootstrap" />
          <h3 class="title title_fz14">Bootstrap</h3>
          <p>bibliothéque  d'outils qui facilte et accélere la création de site web </p>
        </div>
        <div class="skills__item">
          <img src={React} alt="React" />
          <h3 class="title title_fz14">React</h3>
          <p>Bibliothéque pour créer des applications ou des sites web.</p>
        </div>
      </div>
    </div>

   
    <div class="skills__category">
      <h3 class="category__title">Backend</h3>
      <div class="arrow"></div>
      <div class="skills__items">
        <div class="skills__item">
          <img src={Nodejs} alt="Node.js" />
          <h3 class="title title_fz14">Node.js</h3>
          <p> logiciel coté Serveur qui permet de  .</p>
        </div>
        <div class="skills__item">
          <img src={Express} alt="Express.js" />
          <h3 class="title title_fz14">Express.js</h3>
          <p>Framework de node.js qui facilite l'écriture du code</p>
        </div>
        <div class="skills__item">
          <img src={Mongodb} alt="MongoDB" />
          <h3 class="title title_fz14">MongoDB</h3>
          <p>NoSQL base de données.</p>
        </div>
        <div class="skills__item">
          <img src={Postgres} alt="PostgreSQL" />
          <h3 class="title title_fz14">PostgreSQL</h3>
          <p> Base de données relationnel.</p>
        </div>
        <div class="skills__item">
          <img src={Firebase} alt="Firebase" />
          <h3 class="title title_fz14">Firebase</h3>
          <p>API.</p>
        </div>
      </div>
    </div>

   
    <div class="skills__category">
      <h3 class="category__title">Outils de production et intermédiaire</h3>
      <div class="arrow"></div>
      <div class="skills__items">
        <div class="skills__item">
          <img src={Github} alt="Git" />
          <h3 class="title title_fz14">Github</h3>
          <p>Systéme qui permet de </p>
        </div>
        <div class="skills__item">
          <img src={Postman} alt="Postman" />
          <h3 class="title title_fz14">Postman</h3>
          <p>Permet d'effectuer des tests en utilisant des addresse D'API </p>
        </div>
        <div class="skills__item">
          <img src={Webpack} alt="Webpack" />
          <h3 class="title title_fz14">Webpack</h3>
          <p> rassemble tous les fichiers de votre code source et les rassembler en un seul fichier.</p>
        </div>
        <div class="skills__item">
          <img src={Vscode} alt="Jest" />
          <h3 class="title title_fz14">Vscode</h3>
          <p>Editeur de code sur lequel se fait tout le travail du développeur </p>
        </div>
        <div class="skills__item">
          <img src={Npm} alt="NPM" />
          <h3 class="title title_fz14">NPM</h3>
          <p>Controleur de paquet de node.js</p>
        </div>
      </div>
    </div>
  </div>
</section>



 

 <section className="portfolio">
   <div className="container">   
     <div className="title title_fz16 portfolio_title">Portfolio</div>    
      <div className="title title_fz36 portfolio_subtitle">Mes réalisations</div>    
       <div className="divider"></div>    
        <div className="portfolio_wrapper">

      
        <a href="#" className="portfolio__item"
        onClick={(e) => { 
          e.preventDefault(); 
          handleNavigate('/projects'); // Замените на нужный путь
        }} >
            <img src={Vitrine} alt="vitrine" /> 
        </a>
        <a href="#" className="portfolio__item"
         onClick={(e) => { 
          e.preventDefault(); 
          handleNavigate('/projects'); // Замените на нужный путь
        }}>
            <img src={Commerce} alt="commerce" />
         </a>
        <a href="#" className="portfolio__item"
         onClick={(e) => { 
          e.preventDefault(); 
          handleNavigate('/projects'); // Замените на нужный путь
        }}>
            <img src={admin} alt="test" />
        </a>
        <a href="#" className="portfolio__item vertical">
            <img src="img/plans.jpg" alt="test" />
        </a>
        <a href="#" className="portfolio__item">
            <img src={Landing} alt="test" />
        </a>
        <a href="#" className="portfolio__item horizonal"
        
        >
            <img src="img/plans.jpg" alt="test" />
         </a>
        
    </div>
   </div>
 </section>

<section className='Mobile-app'>
<div className="container">
<h2 className='titlemobile'>Création d'applications mobile</h2>
<p className='infos'>Utilisation de React native pour la création d'application mutliplateformes </p>

<div className="features">

        <div className="feature">
          <img className='iconnes' src={platforme} alt="Mobile Development" />
          <h3>Mutliplateformes</h3>
          <p>Création d'applications sur android et ios.</p>
        </div>

        <div className="feature">
          <img className='iconnes' src={code} alt="Code Quality" />
          <h3>Code de qualités</h3>
          <p>Code structuré et lisible basé sur les meilleures pratiques.</p>
        </div>

        <div className="feature">
          <img className='iconnes' src={Design} alt="UI Components" />
          <h3>Design UI</h3>
          <p>J'utilise des composants adaptatifs qui s'adapte sur n'importe quel appareil..</p>
        </div>

        <div className="feature">
          <img className='iconnes'  src={Performance} alt="Performance" />
          <h3>Performance </h3>
          <p>Animations optimisées et grande rapidité de fonctionnement.</p>
        </div>
      </div>



</div> 
</section>



       </>
    )
}
 
export default Home;