import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavIntro() {
    
    return (
        <div className="nav">
            <div className="inner">
                <h2>운전면허시험</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.LICENSE_SCHEDULE} className={({ isActive }) => (isActive ? "cur" : "")}>운전면허시험 접수</NavLink></li>
                    <li><NavLink to={URL.LICENSE_RESULT} className={({ isActive }) => (isActive ? "cur" : "")}>운전면허시험 결과 확인</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavIntro;