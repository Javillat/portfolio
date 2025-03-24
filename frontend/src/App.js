
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./custom/CustomCursor.jsx";
// import { SiJamboard } from "react-icons/si";
import About from './components/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import ScrollToTop from "./components/scroll/ScrollToTop.js";
import Technologies from "./components/tech/Techs";
import ContactMessage from "./components/contact/ContactMessage.jsx";

function App() {

  // window.onscroll = () => {
  //   const header = document.querySelector(".App-header");
  //   const sticky = header.offsetTop;
  //   (window.pageYOffset > sticky) ? header.classList.add("sticky") : header.classList.remove("sticky");
  // }
     
  return (
    <div className="app">
      <CustomCursor />
      <ScrollToTop />
      <header className="App-header sticky">
        <Menu />
      </header>
      <Routes>
        <Route path='/' element={<Main />} >{/** Ruta padre */}
          <Route path='resume' element={<Resume />}/> {/** Ruta hijo */}
          <Route path="projects" element={<Projects />} />{/** Ruta hijo */}
          <Route path="tech" element={<Technologies />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="contact" element={ContactMessage} />
        </Route>
      </Routes>
      <ul className="profile-blocks-appear">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
  );
}

export default App;


  // Ejemplo de uso
  // const App = () => {
  //   return (
  //     <div className="app">
  //       <CustomCursor />
  //       <div className="content">
  //         <HoverableElement>
  //           <h1>Hello World</h1>
  //         </HoverableElement>
  //         <HoverableElement>
  //           <button>Hover Me</button>
  //         </HoverableElement>
  //         <HoverableElement>
  //           <p>This element has a hover effect</p>
  //         </HoverableElement>
  //       </div>
  //     </div>
  //   );
  // };
  