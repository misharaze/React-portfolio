

import project02 from './../img/projects/02.jpg'

import admin from './../img/projects/pannel admin.png'

import project05 from './../img/projects/landing2.jpg'

import project06 from './../img/projects/06.jpg'


import Portrait from './../img/projects/portrait.png'
import Portrait1 from './../img/projects/portrait1.png'
import Portrait2 from './../img/projects/portrait2.png'
import Portrait3 from './../img/projects/portrait3.png'




import  ecommerce1 from './../img/projects/e-commerce1.png'
import ecommerce2 from './../img/projects/e-commerce2.png'
import ecommerce3 from './../img/projects/e-commerce3.png'
import ecommerce4 from './../img/projects/e-commerce4.png'
import ecommerce5 from './../img/projects/e-commerce5.png'
import Fitline from './../img/projects/fitline.png'

import Rest from './../img/projects/rest.png'
import Rest1 from './../img/projects/rest1.png'
import Rest2 from './../img/projects/rest2.png'
import Rest3 from './../img/projects/rest3.png'


import microgreen1 from './../img/projects/microgreen1.png'
import microgreen2 from './../img/projects/microgreen2.png'
import microgreen3 from './../img/projects/microgreen3.png'
import microgreen4 from './../img/projects/microgreen4.png'

import Fitline1 from "./../img/projects/fitline1.png"
import Fitline2 from "./../img/projects/fitline2.png"
import Fitline3 from "./../img/projects/fitline3.png"

import Hydrohome from "./../img/projects/Hydro.png"
import Hydrohome1 from "./../img/projects/Hydro1.png"
import Hydrohome2 from "./../img/projects/Hydro2.png"
import Hydrohome3 from "./../img/projects/Hydro3.png"





import donuts1 from './../img/projects/donuts1.png'
import donuts2 from './../img/projects/donuts2.png'
import donuts3 from './../img/projects/donuts3.png'
import donuts4 from './../img/projects/donuts4.png'
import donuts5 from './../img/projects/donuts5.png'

//import healthy1 from './../img/projects/healthy1.png'
//import healthy2 from './../img/projects/healthy2.png'
//import healthy3 from './../img/projects/healthy3.png'
//import healthy4 from './../img/projects/healthy4.png'
import healthy5 from './../img/projects/healthy5.png'


import  ReactIcon  from './../img/icons/react.png';
import  CssIcon from './../img/icons/css.png';
import  HtmlIcon from './../img/icons/html.png';
import  JsIcon from './../img/icons/js.png';
import  NodejsIcon from './../img/icons/node.png';
import  PostgresIcon from './../img/icons/postgres.png';


import   FirebaseIcon from './../img/icons/firebase.png';


import vsCodeIcon from './../img/icons/vsCode.png';
import express from './../img/icons/express.png'

export const projects = {

   'E-commerce': [

        {   id:'E-commerce',
            category: 'E-commerce',
            title: 'E-commerce sites',
            Skills: 'React, Node.js, postgres, CSS, HTML',
            img: ecommerce1,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5],
            
            description: 'Site e-commerce complet avec catalogue de produits, panier, authentification utilisateur.',
            
            technologies: {
                frontend: [ <img src={ReactIcon} alt="VS Code Icon" />,  <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" /> 
                ],
                backend: [<img src={express} alt="VS Code Icon" />,<img src={FirebaseIcon} alt="VS Code Icon" />,
                    <img src={NodejsIcon} alt="VS Code Icon" />
                ],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />, ]  
            } 

        },
        {    
            category: 'E-commerce',
            title: 'Pannel administrateur',
            Skills: 'React Native',
            img: admin,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [project02, project05, project06],
            description: 'Tableau de bord administrateur.',
            technologies: {
                frontend: [ <img src={ReactIcon} alt="VS Code Icon" />, <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" /> ],
                backend: [<img src={PostgresIcon} alt="VS Code Icon" />,  <img src={express} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />, ]
            }
        
        },
    ],
    'Applications mobile': [


        { 
            id: 'Applications mobile',
              category: 'Applications mobile',
            title: 'Applications mobile',
            Skills: 'React Native, node.js',
            img: project02,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [project05, project05, project05],
            description: 'Application mobile multiplateforme développée avec React Native.',
            technologies: {
                frontend: [<img src={ReactIcon} alt="VS Code Icon" />,  <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />  ],
                backend: [<img src={express} alt="VS Code Icon" />,
                    <img src={NodejsIcon} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />  ]
            }
        },
    ],
    'Site vitrine': [
        {
            id: 'Landing Page',
          
          
            category: 'Site vitrine',
            title: 'site vitrine',
            Skills: 'React HTML, SCSS, JS',
            img: Rest,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [Rest1,Rest2,Rest3],
            description: 'Gourmet est un site web moderne et haut de gamme conçu pour un restaurant gastronomique souhaitant présenter son univers culinaire de façon élégante et immersiveLe projet met en avant une identité visuelle raffinée, combinant une navigation fluide, une présentation soignée et une expérience utilisateur agréable.',
            technologies: {
                frontend: [ <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
                backend: [  <img src={express} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> , ] 
            }
    
         },



        {  
              id: 'Site Vitrine', //ид ставиться только в одно поля не нужно его подставлять везде они то будет все двоться
            category: 'Site Vitrine ',
            title: 'MicroGreen',
            Skills: 'Vue, Node.js, MongoDB',
            img: microgreen2,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [microgreen1,  microgreen2, microgreen3, microgreen4],

            description: 'Site vitrine moderne pour entreprise.',
            technologies: {
                frontend: [   <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
                backend: [<img src={NodejsIcon} alt="VS Code Icon" />,],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> , ]
            }
          },

        {  
            
          category: 'Site Vitrine ',
          title: 'DonutsShop',
          Skills: 'Vue, Node.js, MongoDB',
          img: donuts4,
          siteLink: "https://example.com", 
          gitHublink: 'https://githhub.com',
          images: [donuts1, donuts2, donuts3, donuts4, donuts5],

          description: 'Site vitrine moderne pour entreprise.',
          technologies: {
              frontend: [   <img src={HtmlIcon} alt="VS Code Icon" />,
                  <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
              backend: [<img src={NodejsIcon} alt="VS Code Icon" />,],
              devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> , ]
          }
        },
    ],
    'Panneau admin': [
        {    
            id: 'Panneau admin',
            category: 'Panneau admin',
            title: 'Pannel administrateur',
            Skills: 'React Native',
            img: admin,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [project02, project05, project06],
            description: 'Tableau de bord administrateur.',
            technologies: {
                frontend: [ <img src={ReactIcon} alt="VS Code Icon" />, <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" /> ],
                backend: [<img src={PostgresIcon} alt="VS Code Icon" />,  <img src={express} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />, ]
            }
        
        },
    ],
    'Landing Page': [
        {
            id: 'Landing Page',
          
          
            category: 'Site vitrine',
            title: 'Landing',
            Skills: 'HTML, SCSS, JS',
            img: healthy5,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [Fitline1,Fitline2,Fitline3],
            description: 'Application web HealthTech permettant la mise en relation entre utilisateurs et spécialistes (nutritionnistes, coachs fitness). La plateforme offre des profils détaillés, des consultations en ligne, des programmes personnalisés et un système de réservation.',
            technologies: {
                frontend: [ <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
                backend: [  <img src={express} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> ] 
            }
    
        },

         {
            id: 'Landing page',
          
          
            category: 'Site vitrine',
            title: 'Landing page',
            Skills: 'HTML, SCSS, JS',
            img: Hydrohome,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [Hydrohome1,Hydrohome2,Hydrohome3 ],
            description: 'HydroHome est un site vitrine moderne dédié à la promotion d’un système hydroponique domestique. Le site présente de manière élégante comment l’hydroponie permet de cultiver des plantes chez soi sans terre, tout en optimisant l’espace et les ressources.',
            technologies: {
                frontend: [ <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
                backend: [  <img src={express} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> ] 
            }
        }
    ],


    'Plateforme de mise en relation et réservation (Marketplace)': [
        {
            category: 'Landing Page',
            title: 'Plateforme de mise en relation et réservation',
            Skills: 'HTML, CSS, JS , react' ,
            img: Fitline,
            
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
             images: [Fitline1,Fitline2,Fitline3],
            description: 'Application web HealthTech permettant la mise en relation entre utilisateurs et spécialistes (nutritionnistes, coachs fitness). La plateforme offre des profils détaillés, des consultations en ligne, des programmes personnalisés et un système de réservation.',
            technologies: {
                frontend: [   <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
                backend: [<img src={NodejsIcon} alt="VS Code Icon" />,],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" />]
            }
          },
    ],
    'Galerie en ligne': [
        {
            id: 'Galerie en ligne',
          
          
            category: 'Galerie en ligne',
            title: 'Landing',
            Skills: 'React, HTML, SCSS, JS',
            img: Portrait,
            siteLink: "https://example.com", 
            gitHublink: 'https://githhub.com',
            images: [Portrait1,Portrait2,Portrait3],
            description: 'Ce site est une galerie en ligne dédiée aux portraits hyperréalistes, créée pour présenter le travail d’un artiste spécialisé dans la représentation détaillée et expressive du visage humain. La page d’accueil accueille les visiteurs avec une mise en page épurée et moderne, mettant en avant la mission du créateur : transmettre les émotions et la personnalité de chaque individu à travers l’art.',
            technologies: {
                frontend: [ <img src={HtmlIcon} alt="VS Code Icon" />,
                    <img src={CssIcon} alt="VS Code Icon" />, <img src={JsIcon} alt="VS Code Icon" />],
                backend: [  <img src={express} alt="VS Code Icon" />],
                devops: [ <img src={vsCodeIcon} alt="VS Code Icon" /> ,] 
            }
    
        },
    ]

}



