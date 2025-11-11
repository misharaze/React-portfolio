import { projects } from '../helpers/ProjectList';
import Project from '../components/project/Project';
import './Projects.scss'
import { FaLaptopCode, FaMobileAlt, FaServer, FaGlobe } from 'react-icons/fa';

const iconMap = {
  ecommerce: <FaGlobe />,
  landing: <FaLaptopCode />,
  fullstack: <FaServer />,
  mobile: <FaMobileAlt />,
};

const Projects = () => {
    const scrollToCategory = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
        <main className="section">
            <div className="container">
                <div className="title-project">Mes projets</div>
                <p className="subtitle-project">Les projets que j'ai créés depuis le commencement</p>

                <div className="category-buttons">
                    {Object.keys(projects).map((category) => (
                        <button
                            key={category}
                            className="category-btn"
                            onClick={() => scrollToCategory(category)}
                           
                        >
                             {iconMap[category.toLowerCase()] || '📁'} 
                            {category}
                        </button>
                    ))}
                </div>

  {Object.entries(projects).map(([category, projectList]) => (
                    <div key={category} id={category} className="project-category">
                        <h3 className="project-category-title">{category}</h3>

                        <ul className="projects">
                            {projectList.map((project, index) => (
                                <Project
                             
                                key={project.id || `${category}-${index}`}
                                project={project}
                              />
                              
                                  
                                  
                                
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
        </>
    );
};

export default Projects;
