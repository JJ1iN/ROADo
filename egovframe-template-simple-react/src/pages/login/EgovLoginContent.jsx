import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as EgovNet from 'api/egovFetch';

import URL from 'constants/url';
import CODE from 'constants/code';
import { getLocalItem, setLocalItem, setSessionItem } from 'utils/storage';

function EgovLoginContent(props) {
    console.group("EgovLoginContent");
    console.log("[Start] EgovLoginContent ------------------------------");
    console.log("EgovLoginContent [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovLoginContent [location] : ", location);

    const [userInfo, setUserInfo] = useState({ id: '', password: 'default', userSe: 'USR' });
	// eslint-disable-next-line no-unused-vars
    const [loginVO, setLoginVO] = useState({});

    const [saveIDFlag, setSaveIDFlag] = useState(false);

    const checkRef = useRef();

    const KEY_ID = "KEY_ID";
    const KEY_SAVE_ID_FLAG = "KEY_SAVE_ID_FLAG";

    const handleSaveIDFlag = () => {
        setLocalItem(KEY_SAVE_ID_FLAG, !saveIDFlag)
        setSaveIDFlag(!saveIDFlag);
    };

    useEffect(() => {
        let idFlag = getLocalItem(KEY_SAVE_ID_FLAG);
        if (idFlag === null) {
            setSaveIDFlag(false);
			// eslint-disable-next-line react-hooks/exhaustive-deps
            idFlag = false;
        } else {
            setSaveIDFlag(idFlag);
        }
        if (idFlag === false) {
            setLocalItem(KEY_ID, "");
            checkRef.current.className = "f_chk"
        } else {
            checkRef.current.className = "f_chk on"
        };
      }, []);

    useEffect(() => {
        let data = getLocalItem(KEY_ID);
        if (data !== null) {
            setUserInfo({ id: data, password: 'default', userSe: 'USR' });
        }
    }, []);

    const submitFormHandler = (e) => {
        console.log("EgovLoginContent submitFormHandler()");
        
        const loginUrl = "/auth/login-jwt"

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }

        EgovNet.requestFetch(loginUrl,
            requestOptions,
            (resp) => {
                let resultVO = resp.resultVO;
                let jToken = resp?.jToken || null;

                setSessionItem('jToken', jToken);

                if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
                    //setLoginVO(resultVO);
                    setSessionItem('loginUser', resultVO);
                    props.onChangeLogin(resultVO);
                    if (saveIDFlag) setLocalItem(KEY_ID, resultVO?.id);
                    navigate(URL.MAIN);
                    // 열린메뉴 닫기
                    document.querySelector('.all_menu.WEB').classList.add('closed');
                    document.querySelector('.btnAllMenu').classList.remove('active');
                    document.querySelector('.btnAllMenu').title = '전체메뉴 닫힘';
                } else {
                    alert(resp.resultMessage)
                }
            })
    }

    console.log("------------------------------EgovLoginContent [End]");
    console.groupEnd("EgovLoginContent");
    
    return (
        <div className="contents" id="contents">
            {/* <!-- 본문 --> */}
            <div className="Plogin">
                <h1>로그인</h1>

                <div className="login_box">
                    <form name="" method="" action="" >
                        <fieldset>
                            <legend>로그인</legend>
                            <span className="group">
                                <input type="text" name="" title="아이디" placeholder="아이디" value={userInfo?.id}
                                    onChange={e => setUserInfo({ ...userInfo, id: e.target.value })} />
                                <input type="password" name="" title="비밀번호" placeholder="비밀번호"
                                    onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} />
                            </span>
                            <div className="chk">
                                <label className="f_chk" htmlFor="saveid" ref={checkRef}>
                                    <input type="checkbox" name="" id="saveid" onChange={handleSaveIDFlag} checked={saveIDFlag}/> <em>ID저장</em>
                                </label>
                            </div>
                            <button type="button" onClick={submitFormHandler}><span>LOGIN</span></button>
                        </fieldset>
                    </form>
                </div>
            </div>
            {/* <!--// 본문 --> */}
        </div>
    );
}

export default EgovLoginContent;