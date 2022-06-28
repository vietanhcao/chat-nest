import { ConfigProvider, message } from 'antd';
// import enUS from 'antd/es/locale/en_US'
import viVN from 'antd/es/locale/vi_VN';
// import moment from 'moment'
import 'moment/locale/vi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { logout, selectAccessToken } from 'src/features/Auth/authSlice';
// import { connectSoketAuth, disconnectSocketAuth, initiateSocketAuth, listenToLogout } from 'src/socket/socketAuth';
import { AppFooter, AppHeader, AppSidebar, TheContent } from '../containers/index';

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const accessToken = useSelector(selectAccessToken);
  // useEffect(() => {
  //   const socket = initiateSocketAuth();
  //   console.log(socket);
  //   if (socket) {
  //     connectSoketAuth(() => {
  //       listenToLogout((msg) => {
  //         message.warn('Tài khoản của bạn đã bị đăng nhập từ thiết bị khác');
  //         dispatch(logout());
  //       });
  //     }, accessToken);
  //   }
  //   return () => {
  //     disconnectSocketAuth();
  //   };

  //   // return () => {}
  // }, []);

  // useEffect(() => {
  //   if (!accessToken) {
  //     history.push('/login');
  //   }
  // }, [accessToken]);
  const cApp = document.body;
  const lightTheme = 'c-light-theme';
  const darkTheme = 'c-dark-theme';
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }
  if (theme === lightTheme || theme === darkTheme) {
    cApp.classList.add(theme);
  } else {
    cApp.classList.add(lightTheme);
  }
  return (
    <div className="c-app c-default-layout">
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1" style={{ padding: 10 }}>
          <ConfigProvider locale={viVN}>
            <TheContent />
          </ConfigProvider>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
