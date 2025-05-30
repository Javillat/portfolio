import { NavLink } from "react-router-dom";
import { _LANGUAGES } from "../config/index";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import Brand from '../../assets/brand/Brand';
import './menu.css';


const isActive = ({ isActive }) => `${isActive ? 'active' : ''}`;
export default function Menu() {

    const { i18n, t } = useTranslation();

    //const [selected, setSelected] = useState(false);
    const [isChecked, setChecked] = useState(true);
    const [isMenuActive, setMenuActive] = useState(false);

    const onChangeLang = (event) => {
        setChecked(event.target.checked);
        //setChecked((prev) => !prev);
        const lang_code = event.target.value
        i18n.changeLanguage(lang_code)
    }

    const onClickMenuToggle = () => {
        setMenuActive((prev) => !prev);
    }

    return (
        <nav id="menu" onClick={onClickMenuToggle} className={` ${isMenuActive ? 'active' : ''}`}>
            <Brand />
            <div className="menu-dash"></div>
            <div className="menu-dash"></div>
            <div className="menu-dash"></div>
            <div id="menuToggle" className={`menu ${isMenuActive ? 'active' : ''}`} onClick={onClickMenuToggle}>
                <NavLink className={isActive} to='/'>{t('home')}</NavLink>
                <NavLink className={isActive} to='/resume'>{t('resume')}</NavLink>
                <NavLink className={isActive} to='/projects'>{t('projects')}</NavLink>
                <NavLink className={isActive} to='/tech'>{t('tech')}</NavLink>
                <NavLink className={isActive} to='/contact'>{t('contact')}</NavLink>
                <NavLink className={isActive} to='/blog'>Blog</NavLink>
                {/* <NavLink className={isActive} to='/insights'>insights</NavLink> */}
            </div>
            <div id="language">
                {/* {isChecked ? "ES" : "EN"} */}
                {/*<button onClick={()=>{setSelected(!selected)}}>{selected?'Hide':'Show'}Menu<*/}
                <FormControl>
                    <FormControlLabel
                        labelPlacement={"start"}
                        // isChecked ? "end" : "start"
                        style={{ paddingLeft: '1.5em', fontFamily: 'var(--base-font)', color: 'var(--jade)', fontSize: '1.5em' }}
                        label={isChecked ? "ES" : "EN"}
                        control={<Switch checked={isChecked} value={isChecked ? 'en' : 'es'} onChange={onChangeLang} defaultValue={'es'} inputProps={{
                            'aria-label': _LANGUAGES.map((lng) => {
                                return lng.code
                            })
                        }} size="medium" style={{ color: "var(--jade)" }} />} />
                </FormControl>
            </div>
            {/* color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} /> */}
        </nav>
    );
};