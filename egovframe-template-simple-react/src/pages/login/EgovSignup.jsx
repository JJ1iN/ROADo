import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import CODE from 'constants/code';

import EgovRadioButtonGroup from 'components/EgovRadioButtonGroup';

function EgovSignup(props) {
    console.group("EgovSignup");
    console.log("[Start] EgovSignup ------------------------------");
    console.log("EgovSignup [props] : ", props);

    const navigate = useNavigate();

    const reptitSeCodeRadioGroup = [{ value: "1", label: "남" }, { value: "2", label: "여" }];
    const [scheduleDetail, setScheduleDetail] = useState({ reptitSeCode: "1" });

    useEffect(() => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovSignup [End]");
    console.groupEnd("EgovSignup");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePrivacyPolicyClick = () => {
        setIsModalOpen(!isModalOpen);
    };
  
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li>회원가입</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout2">

                    <div className="contents BOARD_CREATE_REG" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">회원가입</h1>
                        </div>
                            <h2 className="tit_2"></h2>
                            <p>본 서비스는 도로교통법 시행령에 따라 주민등록번호가 포함된 자료를 처리합니다. (도로교통법 시행령 제87조3 민감정보 및 고유식별정보의 처리)</p><br/>
                        <div className="board_view2">
                            <dl>
                                <dt><label htmlFor="terms">약관 동의</label><span className="req">필수</span></dt>
                                <dd>
                                <button onClick={handlePrivacyPolicyClick} style={{ marginRight: '5px' }}>개인정보 제공 및 고유식별정보 처리 동의</button>                            
                                <input type="checkbox" name="terms" id="terms" required />
                                <label htmlFor="terms"> 이용 약관에 동의합니다.</label>
                                </dd>
                            </dl>
                            {/* 모달 컴포넌트를 조건부 렌더링 */}
                            {isModalOpen && <Modal onClose={handleCloseModal} />}
        
                            <dl>
                                <dt><label htmlFor="name">이름</label><span className="req">필수</span></dt>
                                <dd>
                                <input className="f_input2 w_half" type="text" name="name" id="name" required />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="ssn1">주민등록번호</label><span className="req">필수</span></dt>
                                <dd>
                                    <input className="f_input2" type="text" name="ssn1" id="ssn1" required maxLength="6"/>
                                    -
                                    <input className="f_input2" type="text" name="ssn2" required maxLength="7"/>
                                </dd>
                            </dl>
                            <dl>
                                <dt>성별<span className="req">필수</span></dt>
                                <dd>
                                    <EgovRadioButtonGroup
                                        name="reptitSeCode"
                                        radioGroup={reptitSeCodeRadioGroup} 
                                        setValue={scheduleDetail.reptitSeCode.trim()}
                                        setter={(v) => setScheduleDetail({ ...scheduleDetail, reptitSeCode: v })} />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="phone1">전화번호</label><span className="req">필수</span></dt>
                                <dd>
                                    <input className="f_input2" type="tel" name="phone1" id="phone1" required maxLength="3" />
                                    -
                                    <input className="f_input2" type="tel" name="phone2" required maxLength="4" />
                                    -
                                    <input className="f_input2" type="tel" name="phone3" required maxLength="4" />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="address">주소</label><span className="req">필수</span></dt>
                                <dd>
                                <input className="f_input2 w_half" type="text" name="address" id="address" required />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="id">아이디</label><span className="req">필수</span></dt>
                                <dd>
                                <input className="f_input2 w_half" type="text" name="id" id="id" required />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="Password">비밀번호</label><span className="req">필수</span></dt>
                                <dd>
                                <input className="f_input2 w_half" type="password" name="password" id="password" required />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="Password2">비밀번호 확인</label><span className="req">필수</span></dt>
                                <dd>
                                <input className="f_input2 w_half" type="password" name="password2" id="password2" required />
                                </dd>
                            </dl>

                            <br/>
                            
                            <ul className="list">
                                <li>*비밀번호는 8~12자의 영문 대/소문자, 숫자, 특수문자를 혼합해서 사용해야합니다.</li>
                            </ul>

                            <br/>

                            {/* <!-- 버튼영역 --> */}
                            <div className="board_btn_area">
                                <div className="left_col btn1" style={{ marginBottom: '30px' }}>
                                    <button className="btn btn_skyblue_h46 w_100"
                                        onClick={() => ""}>가입</button>
                                </div>
                            </div>
                            {/* <!--// 버튼영역 --> */}
                        </div>
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovSignup;