import '../../pages/Projects.scss';

import { Link } from 'react-router-dom';  // Для перехода на страницу с подробностями

const Project = ({ title, img, index }) => {
    return (
        <li className="project-card">
            <div className="image-container">
                <img src={img} alt={title} />
                <div className="overlay">
                    <h3>{title}</h3>
                    <Link to={`/project/${index}`} className="more-info">
                        <div className="circle">+</div>
                        <span> Plus de détails </span>
                    </Link>
                </div>
            </div>
        </li>
    );
};
export default Project;