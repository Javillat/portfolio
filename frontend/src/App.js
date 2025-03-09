
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Particles from "react-particles";
// import { SiJamboard } from "react-icons/si";
import { loadFull } from "tsparticles";
import About from './components/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import ScrollToTop from "./components/scroll/ScrollToTop.js";
import Technologies from "./components/tech/Techs";
//https://particles.js.org/

function App() {
  const particlesInit = useCallback(async engine => {
    //console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);

  }, []);

  // window.onscroll = () => {
  //   const header = document.querySelector(".App-header");
  //   const sticky = header.offsetTop;
  //   (window.pageYOffset > sticky) ? header.classList.add("sticky") : header.classList.remove("sticky");
  // }

  return (
    <div className="app">
      <Particles id="tsparticles" url="http://localhost:3001/json" init={particlesInit} loaded={particlesLoaded} />
      <ScrollToTop />
      <header className="App-header sticky">
        <Menu />
      </header>
      <Routes>
        <Route path='/' element={<Main />} >{/** Ruta padre */}
          <Route path='resume' element={<Resume />}/> {/** Ruta hijo */}
          <Route path="projects" element={<Projects />} />{/** Ruta hijo */}
          <Route path="tech" element={<Technologies />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
