import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutSite() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">센터 소개</Link></li>
                        <li>소개</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">센터 소개</h1>

                        <p className="txt_1"></p>
                        
                        <h2 className="tit_4">도로교통혁신안전센터</h2>

                        <h3 className="tit_5">소개</h3>

                        <p className="msg_1">
                            도로교통혁신센터는 1954년 설립된 도로교통안전 종합전문기관으로서 지난 70여 년간 우리나라 교통안전의 기틀을 다지고, 교통사고로부터 국민의 생명을 보호하기 위해 최선을 다해왔습니다. 이동하는 모든 순간, 안전과 편리를 더하는 국민의 ROADo라는 비전으로 안전한 교통문화 조성과 국민 삶의 질 향상을 위해 교통안전시설 개선, 운전면허 시험 · 관리, 교통안전 교육 · 홍보 · 방송 등 다양한 사업을 수행하고 있습니다.<br/><br/>
                            
                            도로교통혁신센터는 4차 산업혁명 시대 급변하는 교통환경에 선제적으로 대응하여 혁신적인 미래교통 전문기관으로서 새로운 역할을 정립하고자 합니다. 이에 따라 커넥티드카 · 자율주행차 상용화 시대에 대비한 적극적인 국가 R&D 지원을 비롯하여 자율차 운전면허제도와 법규를 마련하고 있습니다. 또한, 대한민국 최초의 디지털 신분증인 모바일 운전면허증 발급, 혁신적이고 차별화된 교통안전 서비스를 제공하고 있습니다. 특히, 국정과제인 세계 최고의 디지털 플랫폼 정부 구현 에 발맞춰 다양한 교통 빅데이터를 융·복합해 누구나 편리하게 활용하도록 데이터산업 생태계 조성에 앞장서고 있습니다.<br/><br/>
                            
                            도로교통공단은 국민의 생명과 안전 확보를 최우선 가치로 삼고 보행자 맞춤형 교통환경 구축과 사고취약요인 개선 등에 역량을 집중하여 교통사고 사망자 줄이기에 노력하겠습니다. 아울러 기관 혁신을 통해 운영을 효율화하고 역량을 강화하여 공공기관으로서의 사회적 책임을 다하겠습니다.</p>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutSite;