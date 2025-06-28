import {projects} from '../helpers/ProjectList.js'
import './Projects.scss'
import '../components/Buttonmix/Buttonmix.scss'
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {PROJECTS_ROUTE} from '../utils/consts.js'

const Project = () => {
    const { id } = useParams();
    const project = projects[id];
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/projects'); // Возвращает на предыдущую страницу
      };

    if (!project) {
        return <p>Projet non trouvé!</p>;
    }
    const { title, imgbig, description, Skills, gitHublink } = project;
    return (
        <div className="project-details">
            <h2 className='titleproject'>{title}</h2>
            <div className="carousel">
                <img className='imgdetails' src={imgbig} alt={title} />
                {/* Добавь карусель с изображениями при необходимости */}
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
        <Link class="back-button" to={PROJECTS_ROUTE}>
                      ← Revenir à la page précédente
                     </Link>
        </div>
      
    );
};

export default Project;