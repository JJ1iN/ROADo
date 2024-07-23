import React from 'react';
import { Link } from 'react-router-dom';

function EgovFooter() {
    return (
        <div className="footer">
            <div className="inner">
                <h1>
                    <Link to="">
                        <img className="w" src="/assets/images/ROADo_Logo2.png" style={{position: "absolute", top: "40px", left: "35px", width: "200px", height: "85px"}} alt="" />                        
                    </Link>
                </h1>
                <div className="info">
                    <Link to="https://www.koroad.or.kr/main/privacy/privacy_policy.do" className="privacy">개인정보처리방침</Link><br/>
                    <p>
                        서울특별시 금천구 서부샛길 606 대성디폴리스지식산업센터 (가산동) 27층<br />
                        고객센터 0000-0000 (수화상담 000) 외국어 상담(채팅) 카카오톡「도로교통혁신안전센터 고객센터」채널
                    </p>
                    <p className="copy">Copyright © 2021 Ministry Of The Interior And Safety. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default EgovFooter;