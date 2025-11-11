import './Project.scss'
import React from 'react';
import { Link } from 'react-router-dom';  // Для перехода на страницу с подробностями

const Project = ({project }) => {
    const { title, img, id } = project;
    return (
        <li className="project-card">
            <div className="image-container">
                <img src={img} alt={title} />
               
                    <h3>{title}</h3>
                    <Link to={`/project/${id || title}`} className="more-info">
                    <div className="circle">+</div>
                    <span> Plus de détails </span>
                </Link>
                </div>
            
        </li>
    );
};
export default Project;