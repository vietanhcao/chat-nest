import CIcon from '@coreui/icons-react';
import {
  CBadge,
  CContainer,
  CHeader,
  CHeaderBrand,
  // CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react';
import { Badge, Switch } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/app/hooks';
import { selectAuthUsername } from 'src/features/auth/authSlice';
// import { selectUserName } from 'src/features/Auth/authSlice';
import { AppBreadcrumb, AppHeaderDropdown } from '../containers/index';
import { getTradingSessionDate, selectSidebarShow, selectSlideTradingSessionDate, sidebarToggler } from './appBarSlice';
import SettingIcon from '../assets/icons/setting_icon.svg';
import BellIcon from '../assets/icons/bell_icon.svg';

const AppHeader = () => {
  const dispatch = useDispatch();
  const username = useAppSelector(selectAuthUsername);
  // const tradingSessionDate = useAppSelector(selectSlideTradingSessionDate);
  let theme = localStorage.getItem('theme');

  useEffect(() => {
    // dispatch(getTradingSessionDate());
  }, [dispatch]);

  return (
    <CHeader position="sticky" style={{ color: '#fff' }} className="mb-1">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none">
          {/* <img style={{ maxWidth: 400, margin: '0 auto' }} src={Logo} alt="logo-login" /> */}
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          {/* Dark{' '}
          <Switch
            width={'1000px'}
            className={'mx-1'}
            shape={'pill'}
            color={'primary'}
            defaultChecked={theme !== 'c-dark-theme'}
            onChange={(checked) => {
              localStorage.setItem('theme', checked ? 'c-light-theme' : 'c-dark-theme');
              document.body.classList.value = localStorage.getItem('theme');
              console.log(localStorage.getItem('theme'));
            }}
          />{' '}
          Light */}
          {/* <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
          <AppBreadcrumb />
        </CHeaderNav>
        <CHeaderNav>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
            {/* <div style={{ marginTop: '1px' }}>
              <i className="cui-calendar icons " style={{ fontSize: '16px' }}></i>
            </div> */}
            <div style={{ marginLeft: '10px', fontSize: 13 }}>Ngày phiên hiện tại: </div>
          </div>

          <CNavItem>
            <CNavLink href="#">
              {/* <Badge count={11} overflowCount={9} offset={[10, 0]} size="small"> */}
              {/* <i className="far fa-bell" style={{ color: 'white', fontSize: 16 }}></i> */}
              <img src={BellIcon} alt="bell-icon" />
              {/* </Badge> */}
            </CNavLink>
          </CNavItem>

          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon name="cil-list" size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon name="cil-envelope-open" size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
        <span style={{ fontSize: 13, marginRight: 10 }} className="d-flex justify-content-center  align-items-center">
          {username}
        </span>

        <img src={SettingIcon} alt="setting-icon" />
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  );
};

export default AppHeader;
