import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavEdu() { 
    console.groupCollapsed("EgovLeftNavEdu");
    console.log("[Start] EgovLeftNavEdu ------------------------------");
    console.log("------------------------------EgovLeftNavEdu [End]");
    console.groupEnd("EgovLeftNavEdu");
    return (
        <div className="nav">
            <div className="inner">
                <h2>교통교육</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.EDUCATION_SPECIAL} className={({ isActive }) => (isActive ? "cur" : "")}>특별교통안전교육</NavLink></li>
                    <li><NavLink to={URL.EDUCATION_SAFETY} className={({ isActive }) => (isActive ? "cur" : "")}>교통안전사회교육</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default React.memo(EgovLeftNavEdu);