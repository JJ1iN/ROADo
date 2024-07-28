import React, { useEffect } from 'react';

function Modal({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    
    const modalStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };
    
    const modalContentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '60%',
        height: '70%',
        position: 'relative',
    };
    
    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '20px',
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
    };
    
    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <button style={closeButtonStyle} onClick={onClose}>X</button>

                <div className="top_tit">
                    <h1 className="tit_2_1">개인정보 제공 및 고유식별정보 처리 동의서</h1><br/>

                    <p className="msg_1" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    
                    □ 개인정보보호법 제15조(개인정보의 수집이〮용)<br/><br/>
                    개인정보보호법 제15조 의거 공공기관이 개인정보를 수집·이용할 경우 정보주체가 제공을 원하지 않을 경우 동의하지 않을 수 있으며, 동의하지 않을 경우 응시원서 접수가 불가함을 알려드립니다.<br/><br/>

                    가. 개인정보의 수집이〮용 목적<br/><br/>
                    (운전면허)<br/>
                    - 운전면허와 국제운전면허의 발급, 갱신 및 관리<br/>
                    - 운전능력 평가(적성검사) 및 인증<br/>
                    - 운전면허 취득에 관한 서비스 제공<br/><br/>

                    (교통교육)<br/>
                    - 도로교통안전 교육 콘텐츠 제공 및 교육 신청 관리<br/>
                    - 교육 이수 확인 및 교육 관련 정보 제공<br/>
                    - 교육 서비스 개선을 위한 통계 분석 및 설문 조사<br/>
                    - 기타 교육 관련 행정업무 처리<br/><br/>

                    나. 수집하려는 개인정보의 항목<br/><br/>
                    - (운전면허) 필수항목: 이름, 주소, 성별, 연락처(전화번호 또는 이메일)<br/>
                    - (교통교육) 필수항목: 이름, 생년월일, 성별, 연락처(전화번호 또는 이메일), 아이디, 교육이수번호(음주운전 교육자 대상)<br/><br/>

                    다. 개인정보의 보유 및 이용기간<br/><br/>
                    - (운전면허) 수집된 개인정보는 운전면허의 유효기간 동안 보유하며, 유효기간이 만료되거나 운전면허가 취소될 경우, 목적 달성 후 지체 없이 파기합니다. 다만, 법령에 의해 보존이 필요한 정보는 해당 법령에서 정한 기간 동안 보존합니다.<br/>
                    - (교통교육) 교육 프로그램 종료일로부터 2년 (다만, 법령에 의해 보존이 필요한 정보는 해당 법령에서 정한 기간 동안 보존합니다.)<br/><br/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Modal;