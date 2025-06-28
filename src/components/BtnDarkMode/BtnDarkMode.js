
import { useState, useEffect, useRef} from 'react'
import sun from "./sun.svg";
import moon from "./moon.svg";
import './BtnDarkMode.css'


const BtnDarkMode = () => {
   
    const [darkMode, setDarkMode] =  useState('light');//изменять состания праписана в импорт
  
    //const [darkMode, setDarkMode] = useLocalStorage('darkmode','light' );
  
    const btnref = useRef(null) //stocke une valeur qui n'est pas neccesaire pour le rendu

  useEffect(() => { //met a jour le mode utiliser   la,cer la fonction 

    if(darkMode === 'dark'){
        document.body.classList.add('dark');
        btnref.current.classList.add('dark-mode-btn--active');  //current  определаеть текушию кнопку
    }else{
      document.body.classList.remove('dark');
      btnref.current.classList.remove('dark-mode-btn--active');  //change la classe active du button 
    }
},[darkMode]);

const toggleDarkMode=()=>{

setDarkMode((currentValue) =>{
return currentValue === 'light' ? 'dark' : 'light'


})
    }
    return (  
    <button ref={btnref} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>

    
     );
}
 
export default BtnDarkMode;