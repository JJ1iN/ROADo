import React from 'react';
import { Link } from 'react-router-dom';

import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutCI() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>센터 소개</Link></li>
                        <li>CI/캐릭터</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">CI/캐릭터</h1>

                        <p className="txt_1"></p>
                        
                        <h2 className="tit_4">로고</h2>

                        <h3 className="tit_5"></h3>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="/assets/images/ROADo_Logo1.png" alt="첫 번째 로고" style={{ width: "500px", height: "80px", marginBottom: "20px" }}/>
                            <img src="/assets/images/ROADo_Logo2.png" alt="두 번째 로고" style={{ width: "350px", height: "140x" }}/>
                        </div>

                        <h3 className="tit_5"></h3>
                        <p className="txt_1"></p>
                        
                        <h2 className="tit_4">캐릭터</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="/assets/images/character.png" alt="캐릭터" style={{ width: "570px", height: "360px", marginBottom: "20px" }}/>
                        </div>
                    
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutCI;