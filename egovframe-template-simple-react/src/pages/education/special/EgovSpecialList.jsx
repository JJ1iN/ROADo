import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import { NOTICE_BBS_ID } from 'config';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavEdu';
import EgovPaging from 'components/EgovPaging';

import { itemIdxByPage } from 'utils/calc';

function EgovSpecialList(props) {
    console.group("EgovSpecialList");
    console.log("[Start] EgovSpecialList ------------------------------");
    console.log("EgovSpecialList [props] : ", props);

    const location = useLocation();
    console.log("EgovSpecialList [location] : ", location);

	const cndRef = useRef();
    const wrdRef = useRef();

    const bbsId = location.state?.bbsId || NOTICE_BBS_ID; 

	// eslint-disable-next-line no-unused-vars
    const [searchCondition, setSearchCondition] = useState(location.state?.searchCondition || { bbsId: bbsId, pageIndex: 1, searchCnd: '0', searchWrd: '' });// 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});

    const [listTag, setListTag] = useState([]);

    const retrieveList = useCallback((searchCondition) => {
        console.groupCollapsed("EgovSpecialList.retrieveList()");

        const retrieveListURL = '/board'+EgovNet.getQueryString(searchCondition);;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {
                setMasterBoard(resp.result.brdMstrVO);
                setPaginationInfo(resp.result.paginationInfo);
                setUser(resp.result.user);

                let mutListTag = [];
                mutListTag.push(<p className="no_data" key="0">검색된 결과가 없습니다.</p>); // 게시판 목록 초기값
                
                const resultCnt = parseInt(resp.result.resultCnt);
                const currentPageNo = resp.result.paginationInfo.currentPageNo;
                const pageSize = resp.result.paginationInfo.pageSize;

                // 리스트 항목 구성
                resp.result.resultList.forEach(function (item, index) {
                    if (index === 0) mutListTag = []; // 목록 초기화
                    const listIdx = itemIdxByPage(resultCnt , currentPageNo, pageSize, index);

                    mutListTag.push(
                        <Link
                            to={{pathname: URL.EDUCATION_SPECIAL_DETAIL}}
                            state={{
                                nttId: item.nttId,
                                bbsId: item.bbsId,
                                searchCondition: searchCondition
                            }}
                            key={listIdx}
                            className="list_item" >
                            <div>{listIdx}</div>
                            {(item.replyLc * 1 ? true : false) &&
                                <div className="al reply">
                                    {item.nttSj}
                                </div>}
                            {(item.replyLc * 1 ? false : true) &&
                                <div className="al">
                                    {item.nttSj}
                                </div>}
                            <div>{item.frstRegisterNm}</div>
                            <div>{item.frstRegisterPnttm}</div>
                            <div>{item.inqireCo}</div>
                        </Link>
                    );
                });
                setListTag(mutListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovSpecialList.retrieveList()");
    },[]);

    useEffect(() => {
        retrieveList(searchCondition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovSpecialList [End]");
    console.groupEnd("EgovSpecialList");
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to={URL.EDUCATION_SPECIAL}>교통교육</Link></li>
                        <li>특별교통안전교육</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">교통교육</h1>
                        </div>

                        <h2 className="tit_2">특별교통안전교육</h2>

                        <br/><Link to="" className="link">바로가기</Link>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovSpecialList;