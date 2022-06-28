import { CHeaderToggler, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import iconMenuToggle from '../assets/icons/icon-open-menu.svg';
import LogoICX from '../assets/image/logo-icx.svg';

import { selectSidebarShow, sidebarToggler } from './appBarSlice';
import { CCreateNavItemCustom } from './CCreateNavItem';
import useNavigate from '../hook/useNavigate';
import './component.scss';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector(selectSidebarShow);

  const navigation = useNavigate();
  return (
    <CSidebar
      className={sidebarShow ? 'show-small-logo' : ''}
      position="fixed"
      selfHiding="md"
      unfoldable={sidebarShow}
      show={sidebarShow}
      onShow={() => console.log('show')}
      onHide={() => {
        dispatch(sidebarToggler(false));
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" style={{ backgroundColor: '#1B2F40' }}>
        <img className="logo-icx" src={LogoICX} alt="logo" />
        <div className="sidebar-brand-full">
          <CHeaderToggler
            onClick={() => {
              dispatch(sidebarToggler());
            }}
          >
            <img src={iconMenuToggle} alt="" />
          </CHeaderToggler>
        </div>

        <div className="sidebar-brand-narrow" name="sygnet">
          <img src={LogoICX} className="sidebar-brand" style={{ width: '2rem' }} alt="" />
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateNavItemCustom items={navigation} />
      </CSidebarNav>
      <span
        style={{
          paddingRight: '5px',
          marginRight: '5px',
          fontSize: 14,
        }}
        className="d-flex justify-content-center  align-items-center"
      >
        v211117.1
      </span>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
