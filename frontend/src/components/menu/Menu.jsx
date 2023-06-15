import { NavLink } from "react-router-dom";
import { _LANGUAGES } from "../config/index";
import { useState } from "react";
import { ToggleButton } from "@mui/material";

export default function Menu() {

    const { isActive, setActive } = useState(false);
    const [selected, setSelected] = useState(false);

    return (
        <nav>
            <div>
                <NavLink className={isActive} to='/'>Home</NavLink>
                <NavLink className={isActive} to='/About'>About</NavLink>
            </div>
            <ToggleButton value="check" selected={selected} onChange={() => { setSelected(!selected) }}>
            </ToggleButton>

            {/* <select defaultValue={'es'}>

                {_LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>{label}</option>
                ))
                };
            </select> */}

        </nav>
    );
};