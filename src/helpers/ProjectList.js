import commerce from './../img/projects/e-commerce.jpg'
import project01big from './../img/projects/e-commerce.jpg'
import project02 from './../img/projects/02.jpg'
import project02big from './../img/projects/02-big.jpg'
import  vitrine from './../img/projects/sitevitrine.jpg'
import project03big from './../img/projects/sitevitrine.jpg'
import admin from './../img/projects/pannel admin.png'
import project04big from './../img/projects/04-big.jpg'
import project05 from './../img/projects/05.jpg'
import project05big from './../img/projects/05-big.jpg'
import project06 from './../img/projects/06.jpg'
import project06big from './../img/projects/06-big.jpg'

import  ReactIcon  from './../img/icons/react.png';
import  CssIcon from './../img/icons/css.png';
import  HtmlIcon from './../img/icons/html.png';
import  JsIcon from './../img/icons/js.png';
import  NodejsIcon from './../img/icons/node.png';
import  PostgresIcon from './../img/icons/postgres.png';
import  Github from './../img/icons/github.png';
import  SequeliseIcon from './../img/icons/sequelize.png';
import   FirebaseIcon from './../img/icons/firebase.png';
//import reactnativeIcon from './../img/icons/reactnative.svg';

import vsCodeIcon from './../img/icons/vsCode.png';
import express from './../img/icons/express.png'

const projects = [
    {title : 'E-commerce site', Skills:' React, Node.js, postgres, CSS, HTML, ', img : commerce, gitHublink: 'https://githhub.com', imgbig :project01big,    description: 'Mobile application using React and Node.js with real-time features and push notifications.',
        technologies: {
            frontend: [ <img src={ReactIcon} alt="VS Code Icon" />,  <img src={HtmlIcon} alt="VS Code Icon" />,
                <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" /> 
            ],
            backend: [<img src={express} alt="VS Code Icon" />,<img src={FirebaseIcon} alt="VS Code Icon" />,
                <img src={NodejsIcon} alt="VS Code Icon" />
            ],
            devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />, <img src={Github} alt="VS Code Icon" />, ]  
        } 
     },
    {title : 'Gallerie art', Skills:' React, node.js', img : project02, gitHublink: 'https://githhub.com', imgbig :project02big ,
        description: 'Mobile application using React and Node.js with real-time features and push notifications.',
        technologies: {
            frontend: [<img src={ReactIcon} alt="VS Code Icon" />,  <img src={HtmlIcon} alt="VS Code Icon" />,
                <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />  ],
            backend: [<img src={express} alt="VS Code Icon" />,
                <img src={NodejsIcon} alt="VS Code Icon" />],
            devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> ,<img src={Github} alt="VS Code Icon" />, ]
        }
    },
    
    {title : 'Site vitrine', Skills:' Vue, Node.js, MongoDB', img : vitrine, gitHublink: 'https://githhub.com', imgbig :project03big ,
        description: 'Showcase website built with Vue and Node.js with a MongoDB database for dynamic content management.',
        technologies: {
            frontend: [   <img src={HtmlIcon} alt="VS Code Icon" />,
                <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
            backend: [<img src={NodejsIcon} alt="VS Code Icon" />,],
            devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> , <img src={Github} alt="VS Code Icon" />,]
        }
      },

    {title : 'Pannel administrateur',  Skills:' React Native', img : admin, gitHublink: 'https://githhub.com',imgbig :project04big,
        description: 'Admin panel for mobile apps built with React Native, allowing easy management of mobile applications.',
        technologies: {
            frontend: [ <img src={ReactIcon} alt="VS Code Icon" />, <img src={HtmlIcon} alt="VS Code Icon" />,
                <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" /> ],
            backend: [<img src={PostgresIcon} alt="VS Code Icon" />,  <img src={express} alt="VS Code Icon" />],
            devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />,  <img src={Github} alt="VS Code Icon" />,]
        }
    
    },
    {title : 'Landing',Skills:' HTML, SCSS, JS', img : project05, gitHublink: 'https://githhub.com',imgbig :project05big, description: 'Landing page created using HTML, SCSS, and JavaScript with smooth animations and SEO optimization.',
        technologies: {
            frontend: [ <img src={HtmlIcon} alt="VS Code Icon" />,
                <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
            backend: [  <img src={express} alt="VS Code Icon" />],
            devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> , <img src={Github} alt="VS Code Icon" />,] 
        }

     },
    {title : 'Portfolio',Skills:' HTML, CSS, JS', img : project06, gitHublink: 'https://githhub.com',imgbig :project06big ,
        description: 'Portfolio website showcasing personal projects, built using HTML, CSS, and JavaScript.',
        technologies: {
            frontend: [  <img src={ReactIcon} alt="VS Code Icon" />, <img src={HtmlIcon} alt="VS Code Icon" />,
                <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
            backend: [<img src={PostgresIcon} alt="VS Code Icon" />,  <img src={express} alt="VS Code Icon" />],
            devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />  ,<img src={Github} alt="VS Code Icon" />,]
        }

    },

]
export {projects}


