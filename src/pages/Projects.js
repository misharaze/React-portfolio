import Project from '../components/project/Project.js';
import {projects} from '../helpers/ProjectList.js';
import './Projects.scss'
const Projects = () => {
    return ( 
<main className="section">
        <div className="container">
            <h2 className="title-project">Mes projets</h2>
            <p className='subtitle-project'>Les projets que j'ai créer depuis le commencement </p>

            <ul className="projects">
               {projects.map((project, index ) => {
                return <Project key={index} title={project.title} img={project.img} index={index}/>

               

               })}
              
              
               
            </ul>
        </div>
    </main>

     );
}
export default Projects;