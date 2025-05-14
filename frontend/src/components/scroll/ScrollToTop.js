import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    //console.log(pathname);

    const getnameclass = useMemo(() => ({
        "/": "main",
        "resume": ".section-resume",
        "tech": ".section-tech",
        "projects": ".section-projects",
        "contact": ".section-contact",
        "solution": ".section-solution",
        "achievement": ".section-achievement",
        "certificate": ".section-certificate",
        "recommended": ".section-recommended",
        "about": "section-about",
        "blog": "blog",
        "insights": ".section-insights",
    }), []);

    const [pixele, setPixele] = useState(0)

    useEffect(() => {
        const clave = (pathname === '/') ? pathname : pathname.slice(1, pathname.length);
        const clase = getnameclass[clave];
        const contenedor = document.querySelector(clase);
        if (!contenedor) return;
        const rect = contenedor.getBoundingClientRect();
        setPixele(rect.top + window.scrollY);
        window.scrollTo(
            { top: rect.top + window.scrollY, behavior: 'smooth' }
        );
    }, [pathname, getnameclass]);
}

export default ScrollToTop;