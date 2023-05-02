import React from "react";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import "./darkMode.css";

const DarkMode = () => {
    const setDarkMode= () => {
        document.querySelector("body").setAttribute("data-theme","dark")
    }

    const setLightMode = () =>{
        document.querySelector("body").setAttribute("data-theme","light")
    }

    const  toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    };

    
    return (
        <div className="dark_mode">
            <input className="dark_mode_input nav_icons" 
                type="checkbox" id="darkmode-toggle"
                onChange={toggleTheme}
            />
            <label className="dark_mode_label" for="darkmode-toggle">
                <Sun />
                <Moon />
            </label>

        </div>
    )

};

export default DarkMode;