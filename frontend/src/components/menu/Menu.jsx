import { NavLink } from "react-router-dom";
import { _LANGUAGES } from "../config/index";
import { useState } from "react";
import Switch from "@mui/material/Switch";

const label = {inputProps: {'ES':'EN'}}

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;
export default function Menu() {

    //const { isActive, setActive } = useState(false);
    const [selected, setSelected] = useState(false);
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    return (
        <nav>
            <div>
                <NavLink className={isActive} to='/'>Home</NavLink>
                <NavLink className={isActive} to='/'>Resume</NavLink>
                <NavLink className={isActive} to='/About'>About</NavLink>
            </div>
            {
                 _LANGUAGES.map((lng) => {
                    return lng.code
                })
            }
            <Switch checked={checked} onChange={handleChange} inputProps={{'aria-label':_LANGUAGES.map((lng) => {
                    return lng.code
                })}} size="medium" />

        </nav>
    );
};