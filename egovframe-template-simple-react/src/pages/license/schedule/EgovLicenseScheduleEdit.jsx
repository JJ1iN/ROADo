import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import CODE from 'constants/code';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavLicense';
import EgovAttachFile from 'components/EgovAttachFile';
import EgovRadioButtonGroup from 'components/EgovRadioButtonGroup';

import 'react-datepicker/dist/react-datepicker.css';

function EgovLicenseScheduleEdit(props) {
    console.group("EgovLicenseScheduleEdit");
    console.log("[Start] EgovLicenseScheduleEdit ------------------------------");
    console.log("EgovLicenseScheduleEdit [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovLicenseScheduleEdit [location] : ", location);

    const reptitSeCodeRadioGroup = [{ value: "1", label: "예" }, { value: "2", label: "아니오" }];

    const [modeInfo, setModeInfo] = useState({ mode: props.mode });
    const [scheduleDetail, setScheduleDetail] = useState({ schdulDeptName: "가산운전면허시험장", schdulChargerName: "관리자", schdulKindCode: 2, reptitSeCode: "1", startDate: new Date(), endDate: new Date() });
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const [schdulBgndeHH, setSchdulBgndeHH] = useState();
    const [schdulBgndeMM, setSchdulBgndeMM] = useState();
    const [schdulEnddeHH, setSchdulEnddeHH] = useState();
    const [schdulEnddeMM, setSchdulEnddeMM] = useState();


    const initMode = () => {
        switch (props.mode) {
            case CODE.MODE_CREATE:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "등록",
                    method : "POST",
                    editURL: '/schedule'
                });
                break;
            case CODE.MODE_MODIFY:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "수정",
                    method : "PUT",
                    editURL: '/schedule'
                });
                break;
			default:
                navigate({pathname: URL.ERROR}, {state: {msg : ""}});
        }
        retrieveDetail();
    }

    const convertDate = (str) => {
        let year = str.substring(0, 4);
        let month = str.substring(4, 6);
        let date = str.substring(6, 8);
        let hour = str.substring(8, 10);
        let minute = str.substring(10, 12);
        return new Date(year, month - 1, date, hour, minute)
    }

    const retrieveDetail = () => {
        if (modeInfo.mode === CODE.MODE_CREATE) {// 조회/등록이면 조회 안함
            setScheduleDetail({
                ...scheduleDetail,
                schdulBgnde:  location.state.iUseDate,
                schdulEndde: location.state.iUseDate,
                startDate: convertDate(location.state.iUseDate),
                endDate: convertDate(location.state.iUseDate),
            });
            return;
        }

        const retrieveDetailURL = `/schedule/${location.state?.schdulId}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                let rawScheduleDetail = resp.result.scheduleDetail;
                //기본값 설정
                setScheduleDetail({
                    ...scheduleDetail,
                    ...rawScheduleDetail,
                    startDate: convertDate(rawScheduleDetail.schdulBgnde),
                    endDate: convertDate(rawScheduleDetail.schdulEndde),
					atchFileId : rawScheduleDetail.atchFileId.trim(),
                });
                setBoardAttachFiles(resp.result.resultFiles);
            }
        );
    }

    const updateSchedule = () => {
        const formData = new FormData();
        
        for (let key in scheduleDetail) {
            formData.append(key, scheduleDetail[key]);
            console.log("scheduleDetail [%s] ", key, scheduleDetail[key]);
        }

        if (formValidator(formData)) {
            const requestOptions = {
                method: modeInfo.method,
                body: formData
            }

            if (modeInfo.mode === CODE.MODE_MODIFY) {
                modeInfo.editURL = `${modeInfo.editURL}/${location.state?.schdulId}`;
            }

            EgovNet.requestFetch(modeInfo.editURL,
                requestOptions,
                (resp) => {
                    if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
                        navigate({ pathname: URL.LICENSE_SCHEDULE });
                    } else {
                        navigate({pathname: URL.ERROR}, {state: {msg : resp.resultMessage}});
                    }
                }
            );
        }

    }

    const formValidator = (formData) => {
        if (formData.get('schdulNm') === null || formData.get('schdulNm') === "") {
            alert("일정명은 필수 값입니다.");
            return false;
        }
        if (formData.get('schdulCn') === null || formData.get('schdulCn') === "") {
            alert("일정내용은 필수 값입니다.");
            return false;
        }
        if (formData.get('schdulSe') === null || formData.get('schdulSe') === "") {
            alert("일정구분은 필수 값입니다.");
            return false;
        }
        if (formData.get('schdulIpcrCode') === null || formData.get('schdulIpcrCode') === "") {
            alert("중요도는 필수 값입니다.");
            return false;
        }
        if (formData.get('reptitSeCode') === null ||formData.get('reptitSeCode') === "") {
            alert("반복구분은 필수 값입니다.");
            return false;
        }
        if (formData.get('schdulBgnde') > formData.get('schdulEndde')) {
            alert("종료일시는 시작일시보다 앞 설 수 없습니다.");
            return false;
        }
        return true;
    }
    const getDateFourteenDigit = (date) => {
        return getYYYYMMDD(date).toString() + makeTwoDigit(date.getHours()) + makeTwoDigit(date.getMinutes()) + makeTwoDigit(date.getSeconds());
    }
    const getYYYYMMDD = (date) => {
        return date.getFullYear().toString() + makeTwoDigit(Number(date.getMonth() + 1)) + makeTwoDigit(date.getDate());
    }
    const makeTwoDigit = (number) => {
        return number < 10 ? "0" + number : number.toString();
    }

    useEffect(function () {
        initMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovLicenseScheduleEdit [End]");
    console.groupEnd("EgovLicenseScheduleEdit");
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to={URL.LICENSE}>운전면허시험</Link></li>
                        <li>운전면허시험 접수</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents SITE_SCHDULE_REG" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">운전면허시험</h1>
                        </div>

                        <h2 className="tit_2">운전면허시험 접수</h2>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view2">
                            <dl>
                                <dt>응시종별<span className="req">필수</span></dt>
                                <dd>
                                    <label className="f_select w_130" htmlFor="schdulSe">
                                        <select id="schdulSe" name="schdulSe" title="일정구분"
                                            value={scheduleDetail.schdulSe}
                                            onChange={(e) => setScheduleDetail({ ...scheduleDetail, schdulSe: e.target.value })}>
                                            <option value="">선택</option>
                                            <option value="1">1종대형</option>
                                            <option value="2">1종보통</option>
                                            <option value="3">1종대형견인</option>
                                            <option value="4">1종구난</option>
                                            <option value="5">1종소형견인</option>
                                            <option value="6">2종보통</option>
                                            <option value="7">2종소형</option>
                                        </select>
                                    </label>
                                </dd>
                            </dl>
                            <dl>
                                <dt>응시 과목/조건<span className="req">필수</span></dt>
                                <dd>
                                    <label className="f_select w_130" htmlFor="schdulIpcrCode">
                                        <select id="schdulIpcrCode" name="schdulIpcrCode" title="중요도"
                                            value={scheduleDetail.schdulIpcrCode}
                                            onChange={(e) => setScheduleDetail({ ...scheduleDetail, schdulIpcrCode: e.target.value })}>
                                            <option value="">선택</option>
                                            <option value="A">기능</option>
                                            <option value="B">도로주행</option>
                                        </select>
                                    </label>
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="schdulDeptName">시험장</label><span className="req">필수</span></dt>
                                <dd>
                                    <input className="f_input2 w_full" type="text" name="schdulDeptName" title="부서" id="schdulDeptName"
                                        value={scheduleDetail.schdulDeptName} readOnly
                                    />
                                </dd>
                            </dl>
                            <dl>
                                <dt>장애여부<span className="req">필수</span></dt>
                                <dd>
                                    <EgovRadioButtonGroup
                                        name="reptitSeCode"
                                        radioGroup={reptitSeCodeRadioGroup}
                                        setValue={scheduleDetail.reptitSeCode.trim()}
                                        setter={(v) => setScheduleDetail({ ...scheduleDetail, reptitSeCode: v })} />
                                </dd>
                            </dl>
                            <dl>
                                <dt>날짜/시간<span className="req">필수</span></dt>
                                <dd className="datetime">
                                    <span className="line_break">
                                        <DatePicker
                                            selected={scheduleDetail.startDate}
                                            name="schdulBgnde"
                                            className="f_input"
                                            dateFormat="yyyy-MM-dd"
                                            showTimeInput
                                            onChange={(date) => {
                                                console.log("setStartDate : ", date);
                                                setScheduleDetail({ ...scheduleDetail, schdulBgnde: getDateFourteenDigit(date), schdulBgndeYYYMMDD: getYYYYMMDD(date), schdulBgndeHH: date.getHours(), schdulBgndeMM: date.getMinutes(), startDate: date });
                                                setSchdulBgndeHH(date.getHours());
                                                setSchdulBgndeMM(date.getMinutes());
                                            }} />
                                        <input type="hidden" name="schdulBgndeHH" defaultValue={schdulBgndeHH} readOnly />
                                        <input type="hidden" name="schdulBgndeMM" defaultValue={schdulBgndeMM} readOnly />
                                    </span>                        
                                </dd>
                            </dl>
                            
                            {/* <!-- 버튼영역 --> */}
                            <div className="board_btn_area">
                                <div className="left_col btn1">
                                    <button className="btn btn_skyblue_h46 w_100"
                                        onClick={() => updateSchedule()}
                                    > 저장</button>
                                    <a href="#!" className="btn btn_skyblue_h46 w_100">삭제</a>
                                </div>

                                <div className="right_col btn1">
                                    <Link to={URL.LICENSE_SCHEDULE} className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                            </div>
                            {/* <!--// 버튼영역 --> */}
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EgovLicenseScheduleEdit;