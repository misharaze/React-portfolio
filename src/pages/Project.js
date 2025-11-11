import {projects} from '../helpers/ProjectList.js'
import './Projects.scss'
import '../components/Buttonmix/Buttonmix.scss'
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {PROJECTS_ROUTE} from '../utils/consts.js'

const Project = () => {
  
    const { id } = useParams();
    const allProjects = Object.values(projects).flat();
    //const project = allProjects[id];
    const project = allProjects.find(p => (p.id || p.title) === id);
    const navigate = useNavigate();

    const handleVisit = () => {
        if (siteLink) {
          window.open(siteLink, '_blank'); // откроет в новой вкладке
        } else if (gitHublink) {
          window.open(gitHublink, '_blank');
        } else {
          alert("Ссылки не найдены");
        }
      };
      


    const handleGoBack = () => {
        navigate('/projects'); // Возвращает на предыдущую страницу
      };

    if (!project) {
        return <p>Projet non trouvé!</p>;
    }
    const { title, images, description, Skills, gitHublink, siteLink } = project;
    return (

        
        <div className="project-details">
            <h2 className='titleproject'>{title}</h2>

  <div className="image-gallery-wrapper">
    <div className="carousel-grid">
      {images.map((imgSrc, index) => (
        <div className="image-card" key={index}>
          <img src={imgSrc} alt={`${title} ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </div>
  </div>

            <h3 className='titledescr'>Description du projet</h3>
            <div className="description">
                
                <p>{description}</p>
            </div>
            <div className="technologies">
                <h3 className='technotitle'>Techologies utiliser </h3>
                <div className="description">
                <div className="tech-grid">
                <div className="tech-section">
                    <h4 className='titletech'>Frontend</h4>
                    <div className="tech-list">
                        {project.technologies.frontend.map((tech, index) => (//обрашаюсь к массиву и прохожу по ниму чтобы выташить изображение
                            <div key={index} className="tech-item">
                             
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="tech-section">
                    <h4 className='titletech'>Backend</h4>
                    <div className="tech-list">
                        {project.technologies.backend.map((tech, index) => (
                            <div key={index} className="tech-item">
                                
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="tech-section">
                    <h4 className='titletech'>DevOps</h4>
                    <div className="tech-list">
                        {project.technologies.devops.map((tech, index) => (
                            <div key={index} className="tech-item">
                          
                                <span>{tech}</span>
                            </div>
                        ))}
                     
                       </div>
                   
                    
                    </div>
                   
                </div>
           
            </div>
        </div>

        <div className="project-buttons-wrapper">
  <div className="project-links">
    <a href={siteLink} target="_blank" rel="noopener noreferrer" className="btn visit-btn">
      🌐 Visiter le site
    </a>
    <a href={gitHublink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
      🛠️ GitHub
    </a>
  </div>
</div>


        <Link to={PROJECTS_ROUTE} className="back-btn">← Retour vers les projets </Link>
      </div>
   
        )
};

export default Project;