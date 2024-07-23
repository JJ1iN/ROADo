import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavAccident() {
    return (
        <div className="nav">
            <div className="inner">
                <h2>교통사고</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.ACCIDENT} className={({ isActive }) => (isActive ? "cur" : "")}>교통사고통계</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavAccident;