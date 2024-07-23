import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAccident';
import URL from 'constants/url';

function EgovStatisticList() {
    return(
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
                        
                        <h2 className="tit_2">교통사고통계</h2>

                        {/* <!-- 검색조건 --> */}
                        <div className="condition">
                            <ul>
                                <li className="third_1 L">
                                    <label className="f_select" htmlFor="search_select">
                                        <select defaultValue={"0"} name="search_select" id="search_select">
                                            <option value="0">전체</option>
                                            <option value="1">제목</option>
                                            <option value="2">제목/내용</option>
                                            <option value="3">작성자</option>
                                        </select>
                                    </label>
                                </li>
                                <li className="third_2 R">
                                    {/* <!-- 210806 수정 --> */}
                                    <span className="f_search w_500">
                                        <input type="text" name="" placeholder=""/>
                                        <button type="button">조회</button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* <!--// 검색조건 --> */}
                        
                        {/* <!-- 게시판목록 --> */}
                        <div className="board_list BRD008">
                            <div className="head">
                                <span>번호</span>
                                <span>제목</span>
                                <span>작성자</span>
                                <span>조회수</span>
                                <span>등록일</span>
                            </div>
                            <div className="result">
                                {/* <!-- case : 데이터 없을때 --> */}
                                {/* <p className="no_data" key="0">검색된 결과가 없습니다.</p> */}
                                
                                {/* <!-- case : 데이터 있을때 --> */}
                                <Link to={URL.ACCIDENT_STATISTIC_DETAIL} className="list_item">
                                    <div>6</div>
                                    <div className="al">2024년 6월 주요 통계</div>
                                    <div>관리자</div>
                                    <div>2523</div>
                                    <div>2021-07-01</div>
                                </Link>
                                <Link to={URL.ACCIDENT_STATISTIC_DETAIL} className="list_item">
                                    <div>5</div>
                                    <div className="al">2024년 5월 주요 통계</div>
                                    <div>관리자</div>
                                    <div>16753</div>
                                    <div>2021-06-01</div>
                                </Link>
                                <Link to={URL.ACCIDENT_STATISTIC_DETAIL} className="list_item">
                                    <div>4</div>
                                    <div className="al">2024년 4월 주요 통계</div>
                                    <div>관리자</div>
                                    <div>34263</div>
                                    <div>2021-05-01</div>
                                </Link>
                                <Link to={URL.ACCIDENT_STATISTIC_DETAIL} className="list_item">
                                    <div>3</div>
                                    <div className="al">2024년 3월 주요 통계</div>
                                    <div>관리자</div>
                                    <div>31251</div>
                                    <div>2021-04-01</div>
                                </Link>
                                <Link to={URL.ACCIDENT_STATISTIC_DETAIL} className="list_item">
                                    <div>2</div>
                                    <div className="al">2024년 2월 주요 통계</div>
                                    <div>관리자</div>
                                    <div>22343</div>
                                    <div>2021-03-01</div>
                                </Link>
                                <Link to={URL.ACCIDENT_STATISTIC_DETAIL} className="list_item">
                                    <div>1</div>
                                    <div className="al">2024년 1월 주요 통계</div>
                                    <div>관리자</div>
                                    <div>31125</div>
                                    <div>2021-02-01</div>
                                </Link>
                            </div>
                        </div>
                        {/* <!--// 게시판목록 --> */}

                        <div className="board_bot">
                            {/* <!-- Paging --> */}
                            <div className="paging">
                                <ul>
                                    <li className="btn"><button to="" className="first">처음</button></li>
                                    <li className="btn"><button to="" className="prev">이전</button></li>
                                    <li><button to="" className="cur">1</button></li>
                                    <li><button to="">2</button></li>
                                    <li className="btn"><button to="" className="next">다음</button></li>
                                    <li className="btn"><button to="" className="last">마지막</button></li>
                                </ul>
                            </div>
                            {/* <!--/ Paging --> */}
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EgovStatisticList;