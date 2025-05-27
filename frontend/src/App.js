
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./custom/CustomCursor.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/menu/Menu";
import ScrollToTop from "./components/scroll/ScrollToTop.js";
import Footer from "./components/footer/Footer.jsx";
import './App.css';
// import About from './components/about/About';

import Main from "./components/main/Main";
const Resume = lazy(() => import("./components/resume/Resume"));
const Technologies = lazy(() => import("./components/tech/Techs"));
const ContactApproach = lazy(() => import("./components/contact/ContactApproach.jsx"));
const ContactMessage = lazy(() => import("./components/contact/ContactMessage.jsx"));
const Blog = lazy(() => import('./blog/pages/Blog.jsx'));
const Projects = lazy(() => import("./components/projects/Projects"));

function App() {

  return (
    <div className="app">
      <CustomCursor />
      <ScrollToTop />
      <header className="App-header sticky">
        <Menu />
      </header>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} >{/** Ruta padre */}
            <Route path='resume' element={<Resume />} /> {/** Ruta hijo */}
            <Route path="projects" element={<Projects />} />{/** Ruta hijo */}
            <Route path="tech" element={<Technologies />} />
            <Route path="contact" element={<ContactApproach />} />
            {/* <Route path="about" element={<About />} /> */}
          </Route>
          <Route path="contact/work" element={<ContactMessage work/>} />
          <Route path="contact/project" element={<ContactMessage project />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog/:id" element={<PostDetail />} /> */}
          {/* <Route path="/insights" element={<Insights />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

