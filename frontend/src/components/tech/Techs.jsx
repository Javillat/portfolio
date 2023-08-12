import { useState, useEffect } from "react";

const Technologies = () => {
    const [technologies, setTechnologies] = useState([]);//Traer desde el back el stack tecnologico.

    return (
        <div>
            <h1>Soy technolgies</h1>
        </div>
    );
}

export default Technologies;