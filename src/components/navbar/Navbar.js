import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

function Navbar (){

const activeLink = "nav-list__link nav-list__link--active"
const normalLink = "nav-list__link"

return (
    
   
    <nav className="nav">
     <div className="container">
         <div className="nav-row">
            <NavLink to="/" className="logo">
              
          
            <strong>WEB-DEV</strong> 
            </NavLink>
           
           

             <ul className="nav-list">
                 <li className="nav-list__item">
                   <NavLink to="/" className={(isactive) =>{
                return isactive ? activeLink : normalLink;
                
                   }}> Menu principal
                   
                   </NavLink>
                   
                    </li>
                   
                 <li className="nav-list__item">
                 <NavLink to="/projects" className="nav-list__link">  Mes Projets
                   
                   </NavLink>
                    
                    </li>

                 <li className="nav-list__item">
                 <NavLink to="/contact" className="nav-list__link"> Contacts
                   
                   </NavLink>
                   
                    </li>

                    <li className="nav-list__item">
                 <NavLink to="/Skills" className="nav-list__link"> Compétences
                   
                   </NavLink>
                   
                    </li>

                    <li className="nav-list__item">
                 <NavLink to="/price" className="nav-list__link"> Prix
                   
                   </NavLink>
                   
                    </li>
                    <li className="nav-list__item">
                 <NavLink to="/faq" className="nav-list__link"> Faq
                   
                   </NavLink>
                   
                    </li>
             </ul>
         </div>
     </div>
 </nav>



)

}
export default Navbar;