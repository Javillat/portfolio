import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    // let nameclass = '';
    // const element = document.querySelector('.section-projects');
    // console.log(element);
    // let pixel = 0;
    // if (pathname === "/resume") {
    //     nameclass = 'section-resume-perfil';
    //     const rect = element.getBoundingClientRect();
    //     pixel = rect.top;
    //     console.log(pixel);
    // } else if (pathname === '/solution') {
    //     nameclass = 'section-solution';
    //     pixel = 1500;
    // } else if (pathname === '/projects') {
    //     nameclass = 'section-projects';
    //     pixel = 2000;
    // } else if (pathname === '/tech') {
    //     nameclass = 'section-tech';
    //     pixel = 2500;
    // } else if (pathname === '/') {
    //     pixel = 0;
    // }

    const getnameclass = {
        "/":"main",
        "resume":".section-resume-perfil",
        "solution":".section-solution",
        "projects":".section-projects",
        "tech":".section-tech",
        "achievement":".section-achievement",
        "certificate":".section-certificate",
        "contact":".section-contact",
        "recommended":".section-recommended",
        about:"section-about"
    };

    const [ pixele, setPixele ] = useState(0)

    useEffect(() => {
       //Object.keys(getnameclass).includes(pathname);
       const clave = (pathname === '/') ? pathname : pathname.slice(1,pathname.length);
       const clase = getnameclass[clave];
       const contenedor = document.querySelector(clase);
       const rect = contenedor.getBoundingClientRect();
       setPixele(rect.top + window.scrollY);
    }
 );
    //console.log(location); Puedo cambiar el valor de top con cada locasion 
    //Si la locasion es projects top es igual a 500px | sacar el valor del pixel donde esta la clase
    useEffect(() =>
        window.scrollTo(
            { top: pixele, behavior: 'smooth' }
        ), [pathname]
    );

}

export default ScrollToTop;