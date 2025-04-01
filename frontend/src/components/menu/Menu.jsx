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

    const onChangeLang = (event) => {
        setChecked(event.target.checked);
        //setChecked((prev) => !prev);
        const lang_code = event.target.value
        i18n.changeLanguage(lang_code)
    }

    return (
        <nav>
            <Brand />
            <div className="menu">
                <NavLink className={isActive} to='/'>{t('home')}</NavLink>
                <NavLink className={isActive} to='/resume'>{t('resume')}</NavLink>
                <NavLink className={isActive} to='/projects'>{t('projects')}</NavLink>
                <NavLink className={isActive} to='/tech'>{t('tech')}</NavLink>
                <NavLink className={isActive} to='/blog'>Blog</NavLink>
                <NavLink className={isActive} to='/contact'>{t('contact')}</NavLink>
                {/* <NavLink className={isActive} to='/achievement'>{t('achievement')}</NavLink> */}
                {/* <NavLink className={isActive} to='/#achievement'>{t('achievement')}</NavLink> */}
                {/* <NavLink className={isActive} to='/certificate'>{t('certificate')}</NavLink> */}
                {/* <NavLink className={isActive} to='/recommended'>{t('recommend')}</NavLink> */}
                {/* <NavLink className={isActive} to='/about'>{t('about')}</NavLink> */}
            </div>
            <div id="language">
                {/* {isChecked ? "ES" : "EN"} */}
                {/*<button onClick={()=>{setSelected(!selected)}}>{selected?'Hide':'Show'}Menu<*/}
                <FormControl>
                    <FormControlLabel
                        labelPlacement={isChecked ? "end" : "start"}
                        style={{ paddingLeft: '1.5em', fontFamily: 'var(--base-font)', color: 'var(--dark-blue)', fontSize: '1.5em' }}
                        label={isChecked ? "es" : "en"}
                        control={<Switch checked={isChecked} value={isChecked ? 'en' : 'es'} onChange={onChangeLang} defaultValue={'es'} inputProps={{
                            'aria-label': _LANGUAGES.map((lng) => {
                                return lng.code
                            })
                        }} size="medium" style={{ color: "var(--dark-blue)" }} />} />
                </FormControl>
            </div>
            {/* color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} /> */}
        </nav>
    );
};