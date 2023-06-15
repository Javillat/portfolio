import { NavLink } from "react-router-dom";
import { _LANGUAGES } from "../config/index";
import { useState } from "react";

export default function Menu() {

    const { isActive, setActive } = useState(true)

    return (
        <nav>
            <div>
                <NavLink className={isActive} to='/'>Home</NavLink>
                <NavLink className={isActive} to='/About'>About</NavLink>
            </div>

            <select defaultValue={'es'}>

                {_LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>{label}</option>
                ))
                };
            </select>
        </nav>
    );
};