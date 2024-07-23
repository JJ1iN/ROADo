import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAccident';

function EgovStatisticDetail() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">교통사고</Link></li>
                        <li>교통사고통계</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents QNA_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">교통사고</h1>                            
                        </div>
                        
                        <h2 className="tit_2"></h2>

                        <div className="board_view2">
                            <dl>
                                <dt>제목</dt>
                                <dd>
                                    jsp파일을 못찼습니다.
                                </dd>
                            </dl>
                            <dl>
                                <dt>등록일자</dt>
                                <dd>
                                    2011-08-08 11:11:11
                                </dd>
                            </dl>
                            <dl>
                                <dt>첨부파일</dt>
                                <dd>
                                    <span className="file_attach">
                                        <Link to="">file_name.hwp</Link> <span>[3626] byte</span>
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>문의</dt>
                                <dd>
                                    abc@nate.com
                                </dd>
                            </dl>
                        </div>
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EgovStatisticDetail;