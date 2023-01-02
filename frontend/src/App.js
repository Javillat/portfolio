
//import './App.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

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
        <p>
          <h1>Soy portfolio</h1> 
        </p>
      </header>
      <Particles id="tsparticles" url="" init={particlesInit} loaded={particlesLoaded} />
    </div>
  );
}

export default App;
