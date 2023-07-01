
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import About from './components/about/About';
import './App.css';
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
//https://particles.js.org/

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);

  }, []);

  window.onscroll = () => {
    const header = document.querySelector(".App-header");
    const sticky = header.offsetTop;
    (window.pageYOffset > sticky) ? header.classList.add("sticky") : header.classList.remove("sticky");
  }

  return (
    <div className="App">
      <Particles id="tsparticles" url="http://localhost:3001/json" init={particlesInit} loaded={particlesLoaded} />
      <header className="App-header">
        <Menu />
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='resume' element={<Main className="section-resume-perfil" />} />
        <Route path="projects" element={<Main className="section-projects" />} />
      </Routes>
    </div>
  );
}

export default App;
