import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';

import URL from 'constants/url';
import CODE from 'constants/code';
import { getSessionItem, setSessionItem } from 'utils/storage';

function EgovHeader() {
    console.group("EgovHeader");
    console.log("[Start] EgovHeader ------------------------------");

    const sessionUser = getSessionItem('loginUser');
    const sessionUserId = sessionUser?.id;
    const sessionUserName = sessionUser?.name;

    const navigate = useNavigate();

    const logInHandler = () => { // 로그인 정보 없을 시
        navigate(URL.LOGIN);
		document.querySelector('.all_menu.WEB').classList.add('closed');
        document.querySelector('.btnAllMenu').classList.remove('active');
        document.querySelector('.btnAllMenu').title = '전체메뉴 닫힘';
    }
    const SignUpHandler = () => {
        navigate(URL.SIGNUP);
		document.querySelector('.all_menu.WEB').classList.add('closed');
        document.querySelector('.btnAllMenu').classList.remove('active');
        document.querySelector('.btnAllMenu').title = '전체메뉴 닫힘';
    }
    
    const logOutHandler = () => {// 로그인 정보 존재할 때
        const logOutUrl = '/auth/logout';
        const requestOptions = {
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
        }
        EgovNet.requestFetch(logOutUrl, requestOptions,
            function (resp) {
                console.log("===>>> logout resp= ", resp);
                if (parseInt(resp.resultCode) === parseInt(CODE.RCV_SUCCESS)) {
                    //onChangeLogin({ loginVO: {} });
                    setSessionItem('loginUser', {"id":""});
                    setSessionItem('jToken', null);
                    window.alert("로그아웃되었습니다!");
                    navigate(URL.MAIN);
					// 열린메뉴 닫기
					document.querySelector('.all_menu.WEB').classList.add('closed');
	                document.querySelector('.btnAllMenu').classList.remove('active');
	                document.querySelector('.btnAllMenu').title = '전체메뉴 닫힘';
                }
            }
        );
    }

    console.log("------------------------------EgovHeader [End]");
    console.groupEnd("EgovHeader");

    return (
        // <!-- header -->
        <div className="header">
            <div className="inner">
                <h1 className="logo">
                    <Link to={URL.MAIN} className="w"><img src="/assets/images/ROADo_Logo1.png" style={{width: "325px", height: "60px"}}/></Link>
                </h1>

                <div className="gnb">
                    <h2 className="blind">주메뉴</h2>
                    <ul>
                        <li><NavLink to={URL.ABOUT} className={({ isActive }) => (isActive ? "cur" : "")}>센터소개</NavLink></li>
                        <li><NavLink to={URL.LICENSE_SCHEDULE} className={({ isActive }) => (isActive ? "cur" : "")}>운전면허시험</NavLink></li>
                        <li><NavLink to={URL.ACCIDENT} className={({ isActive }) => (isActive ? "cur" : "")}>교통사고</NavLink></li>
                        <li><NavLink to={URL.EDUCATION} className={({ isActive }) => (isActive ? "cur" : "")}>교통교육</NavLink></li>
                    </ul>
                </div>

                {/* <!-- PC web에서 보여지는 영역 --> */}
                <div className="user_info">
                    {/* 로그아웃 : 로그인 정보 있을때 */}
                    {sessionUserId &&
                        <>
                            <span className="person">{sessionUserName} </span> 님이, 관리자로 로그인하셨습니다.
                            <button onClick={logOutHandler} className="btn">로그아웃</button>
                        </>
                    }
                    {/* 로그인 : 로그인 정보 없을 때 */}
                    {!sessionUserId &&
                        <div>
                            <button onClick={logInHandler} className="btn login">로그인</button>
                            <button onClick={SignUpHandler} className="btn login">회원가입</button>
                        </div>
                    }
                </div>
                {/* <!--// PC web에서 보여지는 영역 --> */}

                {/* <!-- right area --> */}
                <div className="right_a">
                    <button type="button" className="btn btnAllMenu btnAllMenuM" title="전체메뉴 닫힘">전체메뉴</button>
                </div>
            </div>

            {/* <!-- All menu : web --> */}
            <div className="all_menu WEB closed">
                <h2 className="blind">전체메뉴</h2>
                <div className="inner">
                    <div className="col">
                        <h3>센터소개</h3>
                        <ul>
                            <li><NavLink to={URL.ABOUT_SITE} className={({ isActive }) => (isActive ? "cur" : "")}>소개</NavLink></li>
                            <li><NavLink to={URL.ABOUT_SERVICE} className={({ isActive }) => (isActive ? "cur" : "")}>서비스</NavLink></li>
                            <li><NavLink to={URL.ABOUT_CI} className={({ isActive }) => (isActive ? "cur" : "")}>CI/캐릭터</NavLink></li>
                            <li><NavLink to={URL.ABOUT_ORGANIZATION} className={({ isActive }) => (isActive ? "cur" : "")}>조직도</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>운전면허시험</h3>
                        <ul>
                            <li><NavLink to={URL.LICENSE} className={({ isActive }) => (isActive ? "cur" : "")}>운전면허시험 접수</NavLink></li>
                            <li><NavLink to={URL.LICENSE_RESULT} className={({ isActive }) => (isActive ? "cur" : "")}>운전면허시험 결과 확인</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>교통사고분석</h3>
                        <ul>
                            <li><NavLink to={URL.ACCIDENT_STATISTIC} className={({ isActive }) => (isActive ? "cur" : "")}>교통사고통계</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>교통교육</h3>
                        <ul>
                            <li><NavLink to={URL.EDUCATION_SPECIAL} className={({ isActive }) => (isActive ? "cur" : "")}>특별교통안전교육</NavLink></li>
                            <li><NavLink to={URL.EDUCATION_SAFETY} className={({ isActive }) => (isActive ? "cur" : "")}>교통안전사회교육</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- All menu : mobile --> */}
            <div className="all_menu Mobile closed">
                <div className="user_info_m">
                    {/* 로그아웃 : 로그인 정보 있을때 */}
                    {sessionUserId &&
                        <>
                            <span className="person">{sessionUserName} </span>이 로그인하셨습니다.
                            <button onClick={logOutHandler} className="btn logout">로그아웃</button>
                        </>
                    }

                    {/* 로그인 : 로그인 정보 없을 때 */}
                    {!sessionUserId &&
                        <button onClick={logInHandler} className="btn login">로그인</button>
                    }
                    <button className="btn noscript close" type="button">전체메뉴 닫기</button>
                </div>
            </div>
            {/* <!--// All menu --> */}
        </div>
        // <!--// header -->
    );
}

export default EgovHeader;