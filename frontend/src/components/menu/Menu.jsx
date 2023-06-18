import { NavLink } from "react-router-dom";
import { _LANGUAGES } from "../config/index";
import { useState } from "react";

import Switch from "@mui/material/Switch";
import './menu.css';


const isActive = ({ isActive }) => `${isActive ? 'active' : ''}`;
export default function Menu() {

    //const [selected, setSelected] = useState(false);
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    return (
        <nav>
            <div>
                <NavLink className={isActive} to='/'>Home</NavLink>
                <NavLink className={isActive} to='/resume'>Resume</NavLink>
                <NavLink className={isActive} to='/projects'>Projects</NavLink>
                <NavLink className={isActive} to='/tech'>Tech</NavLink>
                <NavLink className={isActive} to='/achievment'>Achievment</NavLink>
                <NavLink className={isActive} to='/certificate'>Certificate</NavLink>
                <NavLink className={isActive} to='/contact'>Contact</NavLink>
                <NavLink className={isActive} to='/recommended'>Recommend</NavLink>
                <NavLink className={isActive} to='/about'>About</NavLink>
            </div>
            {/* {
                 _LANGUAGES.map((lng) => {
                    return lng.code
                })
            } */}
            {/*<button onClick={()=>{setSelected(!selected)}}>{selected?'Hide':'Show'}Menu<*/}
            <Switch checked={checked} onChange={handleChange} inputProps={{'aria-label':_LANGUAGES.map((lng) => {
                    return lng.code
                })}} size="medium" />

        </nav>
    );
};