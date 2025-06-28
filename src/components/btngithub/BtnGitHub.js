import './BtnGitHub.css';

import githubicons from  './gitHub-black.svg'

const BtnGitHub = ({link}) => {
    return (  
        <a href={link} target="_blank" rel="noreferrer"  className="btn-outline">
        <img src={githubicons} alt=""/>
        GitHub repo
    </a>


    );
}
 
export default BtnGitHub;