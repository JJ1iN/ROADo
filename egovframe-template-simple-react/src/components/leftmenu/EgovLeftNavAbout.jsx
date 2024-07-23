import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavAbout() {
    return (
        <div className="nav">
            <div className="inner">
                <h2>센터 소개</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.ABOUT_SITE} className={({ isActive }) => (isActive ? "cur" : "")}>소개</NavLink></li>
                    <li><NavLink to={URL.ABOUT_SERVICE} className={({ isActive }) => (isActive ? "cur" : "")}>서비스</NavLink></li>
                    <li><NavLink to={URL.ABOUT_CI} className={({ isActive }) => (isActive ? "cur" : "")}>CI/캐릭터</NavLink></li>
                    <li><NavLink to={URL.ABOUT_ORGANIZATION} className={({ isActive }) => (isActive ? "cur" : "")}>조직도</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavAbout;