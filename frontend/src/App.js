
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./custom/CustomCursor.jsx";
import About from './components/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import ScrollToTop from "./components/scroll/ScrollToTop.js";
import Technologies from "./components/tech/Techs";
import ContactApproach from "./components/contact/ContactApproach.jsx";
import ContactMessage from "./components/contact/ContactMessage.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <div className="app">
      <CustomCursor />
      <ScrollToTop />
      <header className="App-header sticky">
        <Menu />
      </header>
      <Routes>
        <Route path='/' element={<Main />} >{/** Ruta padre */}
          <Route path='resume' element={<Resume />} /> {/** Ruta hijo */}
          <Route path="projects" element={<Projects />} />{/** Ruta hijo */}
          <Route path="tech" element={<Technologies />} />
          <Route path="contact" element={<ContactApproach />} />
          <Route path="contact/work" element={<ContactMessage work />} />
          <Route path="contact/project" element={<ContactMessage project />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="blog" element={<Blog />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

