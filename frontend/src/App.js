
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Whoami from './components/whoami/Whoami';
import About from './components/about/About';
import './App.css';
//https://particles.js.org/

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  },[]);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);

  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <Particles id="tsparticles" url="http://localhost:3001/json" init={particlesInit} loaded={particlesLoaded} />
        <Whoami />
      </header>
      <section id="about">
        {/* <About /> */}
      </section>
        <h1>Soy portfolio</h1> 
    </div>
  );
}

export default App;
