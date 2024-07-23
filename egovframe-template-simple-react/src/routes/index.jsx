import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';

import URL from 'constants/url';
import CODE from 'constants/code';

//COMMON
import EgovHeader from 'components/EgovHeader';
import EgovFooter from 'components/EgovFooter';
import EgovError from 'components/EgovError';

import EgovMain from 'pages/main/EgovMain';
import EgovLogin from 'pages/login/EgovLogin';
import EgovSignup from 'pages/login/EgovSignup';

//ABOUT
import EgovAboutSite from 'pages/about/EgovAboutSite';
import EgovAboutService from 'pages/about/EgovAboutService';
import EgovAboutCI from 'pages/about/EgovAboutCI';
import EgovAboutOrganization from 'pages/about/EgovAboutOrganization';

//LICENSE
import EgovLicenseScheduleList from 'pages/license/schedule/EgovLicenseScheduleList';
import EgovLicenseScheduleDetail from 'pages/license/schedule/EgovLicenseScheduleDetail';
import EgovLicenseScheduleEdit from 'pages/license/schedule/EgovLicenseScheduleEdit';
import EgovLicenseResult from 'pages/license/EgovLicenseResult';

//ACCIDENT
import EgovAccidentStatisticList from 'pages/accident/EgovAccidentStatisticList';
import EgovAccidentStatisticDetail from 'pages/accident/EgovAccidentStatisticDetail';

//EDUCATION
import EgovSpecialList from 'pages/education/special/EgovSpecialList';
import EgovSpecialDetail from 'pages/education/special/EgovSpecialDetail';
import EgovSpecialEdit from 'pages/education/special/EgovSpecialEdit';

import EgovSafetyList from 'pages/education/safety/EgovSafetyList';
import EgovSafetyDetail from 'pages/education/safety/EgovSafetyDetail';
import EgovSafetyEdit from 'pages/education/safety/EgovSafetyEdit';

//ADMIN
import * as EgovNet from 'api/egovFetch';
import initPage from 'js/ui';

const SecondRoutes = () => {
  // eslint-disable-next-line no-unused-vars
  const [loginVO, setLoginVO] = useState({});

  //useRef객체를 사용하여 페이지 마운트 된 후 ui.js를 로딩 하도록 변경 코드 추가(아래)
  const isMounted = useRef(false); // 아래 로그인 이동 부분이 2번 실행되지 않도록 즉, 마운트 될 때만 실행되도록 변수 생성
  useEffect(() => {
    if (!isMounted.current) { // 컴포넌트 최초 마운트 시 페이지 진입 전(렌더링 전) 실행
		isMounted.current = true; // 이 값으로 true 일 때만 페이지를 렌더링이 되는 변수 사용.
	}else{
		initPage();
	}
  },[]);
  
  return (
    <>
      <EgovHeader />
      <Routes>
        {/* MAIN */}
        <Route path={URL.MAIN} element={<EgovMain />} />

        {/* LOGIN */}
        <Route path={URL.LOGIN} element={<EgovLogin onChangeLogin={(user) => setLoginVO(user)} />}/>
        <Route path={URL.SIGNUP} element={<EgovSignup />}/>

        {/* ERROR */}
        <Route path={URL.ERROR} element={<EgovError />} />

        {/* ABOUT */}
        <Route path={URL.ABOUT} element={<Navigate to={URL.ABOUT_SITE} />} />
        <Route path={URL.ABOUT_SERVICE} element={<EgovAboutService />} />
        <Route path={URL.ABOUT_SITE} element={<EgovAboutSite />} />
        <Route path={URL.ABOUT_CI} element={<EgovAboutCI />} />
        <Route path={URL.ABOUT_ORGANIZATION} element={<EgovAboutOrganization />} />

        {/* LICENSE */}
        <Route path={URL.LICENSE} element={<EgovLicenseScheduleList />} />
        <Route path={URL.LICENSE_SCHEDULE} element={<EgovLicenseScheduleList />} />
        <Route path={URL.LICENSE_SCHEDULE_DETAIL} element={<EgovLicenseScheduleDetail />} />
        <Route path={URL.LICENSE_SCHEDULE_CREATE} element={<EgovLicenseScheduleEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.LICENSE_SCHEDULE_MODIFY} element={<EgovLicenseScheduleEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.LICENSE_RESULT} element={<EgovLicenseResult />} />

        {/* ACCIDENT */}
        <Route path={URL.ACCIDENT} element={<Navigate to={URL.ACCIDENT_STATISTIC} />} />
        <Route path={URL.ACCIDENT_STATISTIC} element={<EgovAccidentStatisticList />} />
        <Route path={URL.ACCIDENT_STATISTIC_DETAIL} element={<EgovAccidentStatisticDetail />} />

        {/* EDUCATION */}
        <Route path={URL.EDUCATION} element={<Navigate to={URL.EDUCATION_SPECIAL} />} />
        <Route path={URL.EDUCATION_SPECIAL} element={<EgovSpecialList />} />
        <Route path={URL.EDUCATION_SPECIAL_DETAIL} element={<EgovSpecialDetail />} />
        <Route path={URL.EDUCATION_SPECIAL_CREATE} element={<EgovSpecialEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.EDUCATION_SPECIAL_MODIFY} element={<EgovSpecialEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.EDUCATION_SPECIAL_REPLY} element={<EgovSpecialEdit mode={CODE.MODE_REPLY} />} />

        <Route path={URL.EDUCATION_SAFETY} element={<EgovSafetyList />} />
        <Route path={URL.EDUCATION_SAFETY_DETAIL} element={<EgovSafetyDetail />} />
        <Route path={URL.EDUCATION_SAFETY_CREATE} element={<EgovSafetyEdit mode={CODE.MODE_CREATE} />} />
        <Route path={URL.EDUCATION_SAFETY_MODIFY} element={<EgovSafetyEdit mode={CODE.MODE_MODIFY} />} />
        <Route path={URL.EDUCATION_SAFETY_REPLY} element={<EgovSafetyEdit mode={CODE.MODE_REPLY} />} />

		    <Route path={URL.ADMIN_MANAGER} element={<EgovSignup />} />
      </Routes>
      <EgovFooter />
    </>
  )
}

export default SecondRoutes;