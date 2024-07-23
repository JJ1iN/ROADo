import React from 'react';
import { Link } from 'react-router-dom';

import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutService() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>센터 소개</Link></li>
                        <li>서비스</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents SERVICE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">서비스</h1>

                        <p className="txt_1"></p>

                        <h3 className="tit_5">도시교통 브레인 UNIQ</h3>

                        <div className="msg">
                            <p>도시교통 브레인(UNIQ)은 AI 강화학습을 적용한 신호최적화 기술이 탑재되어 있습니다. 교통량이 변화하는 상황에서도 빠르게 교통신호를 바꿔줍니다. 이로써 차량 교차로 통행시간을 15% 이상 단축합니다.</p>
                            <ul>
                                AI 강화학습을 적용한 UNIQ                                
                                <li>소규모 교차로의 신호최적화 기술은 한 곳이 개선되면 다른 부분이 안 좋아지는 풍선효과를 일으킨다. 하지만 클라우드 분산처리 기술을 적용하면 200개 이상의 대규모 교차로에서도 풍선효과 없이 신호최적화가 가능해진다.</li><br/>
                                교통혼잡 해결해 줄 신호최적화 기술
                                <li>본 기술은 신호등에 간단한 신호제어장치를 탑재하여 교통 분석 수집기, 영상정보 등을 통해 데이터를 수집한다. 수집한 데이터는 엣지 서버에서 처리하고 스마트도시통합센터와 연동되어 있는 온라인 시스템으로 신호최적화를 제어한다.</li><br/>
                                실용화를 위한 발걸음
                                <li>본 기술의 빠른 상용화와 적용을 위해 지도, 신호, 통행량의 데이터와 교통 관련 지도의 데이터베이스화, 지자체의 보유 데이터, 보정 기술 등을 통합하는 추가적인 연구를 통해 시스템 구축을 진행할 계획이다.</li>
                            </ul>
                        </div>

                        <h3 className="tit_5">운전면허시험</h3>

                        <div className="msg second">
                            <p>운전면허본부는 전국 운전면허시험장을 운영하고 있으며, 공정한 면허시험 관리와 국민편익 증진을 위한 면허 서비스 개선으로 더욱 믿을 수 있는 운전면허 발급에 온 힘을 다하고 있습니다.</p>
                            <ul>
                                <li>도로교통법 제73조(교통안전교육), 도로교통법 시행령 제37조(교통안전교육)</li>
                                <li>도로교통법 제83조(운전면허시험 등)</li>
                                <li>도로교통법 제85조(운전면허증의 발급 등), 제86조(운전면허증의 재발급)</li>
                                <li>도로교통법 제87조(운전면허증의 갱신과 정기 적성검사)</li>
                                <li>도로교통법 제88조(수시 적성검사), 제89조(수시 적성검사 관련 개인정보의 통보)</li>
                                <li>도로교통법 제98조(국제운전면허증의 발급 등)</li>
                                <li>도로교통법 제106조(전문학원의 강사), 제107조(기능검정원)</li>
                            </ul>
                        </div>

                        <h3 className="tit_5">교통사고분석</h3>

                        <div className="msg third">
                            <p>국가공식 교통사고통계DB를 구축·운영하며 웹서비스(교통사고분석시스템)를 통해 대국민 정보 개방하여 국가 교통사고통계 Hub 기능을 수행하고 있습니다.</p>
                            <ul>
                                <li>통계정보 제공 : 교통여건 정보 및 월별, 시간대별, 사고유형별 등 부문별 사고 통계정보 제공</li>
                                <li>GIS정보 제공 : 지도를 통한 교통사고정보 조회 및 교통사고 다발지역정보 등의 분석정보 제공</li>
                                <li>통계보고서 제공</li>
                            </ul>
                        </div>
                        
                        <h3 className="tit_5">교통교육</h3>

                        <div className="msg fourth">
                            <p>교통법규위반 또는 교통사고야기로 운전면허취소나 정지처분에 대한 교육과 교통안전 전문화 교육을 제공합니다.</p>
                            <ul>
                                특별교통안전교육
                                <li>운전면허가 정지되거나 취소 또는 벌점을 보유한 운전자 대상 교통안전교육</li>
                                <li>음주운전교육, 법규준수교육, 배려운전교육, 현장참여교육, 벌점감경교육</li><br/>
                                교통안전사회교육
                                <li>어린이, 청소년, 기관, 기업체 등 다양한 일반 국민 대상 교통안전교육</li>
                                <li>교통안전담당교사, 교통안전교육지도사</li><br/>
                                교통안전 교육센터
                                <li>온라인 교통안전교육, 교육자료, 직무교육</li>
                                <li>고령운전자, 어린이 통학버스, 긴급자동차, 교통안전교사</li>
                            </ul>
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutService;