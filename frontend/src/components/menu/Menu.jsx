import { NavLink } from "react-router-dom";
import { _LANGUAGES } from "../config/index";
import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import './menu.css';


const isActive = ({ isActive }) => `${isActive ? 'active' : ''}`;
export default function Menu() {

    //const [selected, setSelected] = useState(false);
    const [isChecked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        //setChecked((prev) => !prev);
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
            <div id="language">
                {/* {isChecked ? "ES" : "EN"} */}
                {/*<button onClick={()=>{setSelected(!selected)}}>{selected?'Hide':'Show'}Menu<*/}
                <FormControl><FormControlLabel labelPlacement={isChecked ? "end" : "start"} style={{ paddingLeft: '2em' }} label={isChecked ? "ES" : "EN"} control={<Switch checked={isChecked} onChange={handleChange} inputProps={{
                    'aria-label': _LANGUAGES.map((lng) => {
                        return lng.code
                    })
                }} size="medium" />} /></FormControl>
            </div>

        </nav>
    );
};