import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getSessionItem } from 'utils/storage';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavLicense';

function EgovLicenseWork() {
    const sessionUser = getSessionItem('loginUser');
    const sessionUserId = sessionUser?.id;

    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionUserId) {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
        }
    }, [sessionUserId, navigate]);

    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><a className="home" href="#!">Home</a></li>
                        <li><a href="#!">운전면허시험</a></li>
                        <li>운전면허시험 결과 확인</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents BUSINESS_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">운전면허시험</h1>
                        </div>

                        <h2 className="tit_2">운전면허시험 결과 확인</h2><br/>

                        <div className="board_list BRD001">
                            <div className="head">
                                <span>수험번호</span>
                                <span>이름</span>
                                <span>점수</span>
                                <span>합격여부</span>
                            </div>
                        </div>
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovLicenseWork;