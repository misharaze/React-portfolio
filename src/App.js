import "./styles/main.css";
import './app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/contacts";
import Project from "./pages/Project";
import Skills from "./pages/skills";
import Price from './pages/Price';
import SplashScreen from'./components/splashscreen/splashscreen.js'
import Faq from "./pages/Faq.js";
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  //Компонент SplashScreen отображается, пока переменная loading имеет значение true.

  useEffect(() => {
    // Сымитируем загрузку данных с сервера
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Задержка в 3 секунды для демонстрации

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
  
<Router>

<Navbar/>

<Routes>

<Route path="/" element={loading ? <SplashScreen /> : <Home />} />
<Route path="/projects" element={<Projects/>} />

<Route path="/project/:id" element={<Project/>} />
<Route path="/skills" element={<Skills/>} />
<Route path="/price" element={<Price/>} />
<Route path="/contact" element={<Contacts/>} />
<Route path="/Faq" element={<Faq/>} />

</Routes>

<Footer/>


</Router>

</div>
   
  );
}

export default App;
