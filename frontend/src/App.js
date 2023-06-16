
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import About from './components/about/About';
import './App.css';
import Main from "./components/main/Main";
//https://particles.js.org/

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Particles id="tsparticles" url="http://localhost:3001/json" init={particlesInit} loaded={particlesLoaded} />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </header>
      <main>

      </main>
      <section id="about">
        {/* <About /> */}
      </section>
      <h1>Soy portfolio</h1>
    </div>
  );
}

export default App;
