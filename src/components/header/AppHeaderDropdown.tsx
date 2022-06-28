import CIcon from '@coreui/icons-react';
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { postAuthLogout, selectEmail } from 'src/features/Auth/authSlice';
import { useHistory } from 'react-router';
import {
  authAction,
  selectAuthDeptName,
  selectAuthEmail,
  selectAuthFullName,
  selectAuthPhoneNumber,
} from '../../features/auth/authSlice';
import UserIcon from '../../assets/icons/user_logo_icon.svg';
import NameDepartment from '../../assets/icons/name_department.svg';
import UserColorIcon from '../../assets/icons/user_color_icon.svg';
import EmailIcon from '../../assets/icons/email_icon_color.svg';
import PhoneIcon from '../../assets/icons/phone_icon.svg';
import './style.scss';
import { Button, Typography } from 'antd';
import { useAppSelector } from 'src/app/hooks';
import ChangePass from './ChangePass';

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useAppSelector(selectAuthEmail);
  const phoneNumber = useAppSelector(selectAuthPhoneNumber);
  const fullName = useAppSelector(selectAuthFullName);
  const deptName = useAppSelector(selectAuthDeptName);
  const [isShowChangePassModal, setShowChangePassModal] = useState<boolean>(false);

  const onLogout = () => {
    // dispatch(postAuthLogout(email));
    dispatch(authAction.logout());
    history.push(`/login`);
  };

  const onChangePass = () => {
    setShowChangePassModal(true);
  };

  return (
    <CDropdown variant="nav-item" className="dropdown--custom">
      <CDropdownToggle className="py-0" caret={false}>
        {/* <CAvatar src="/avatars/8.jpg" size="md" /> */}
        <img src={UserIcon} alt="user-icon" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <div>
          <img src={NameDepartment} alt="name-department" />
          <span style={{ fontSize: 13, marginLeft: 10, color: '#4B4B4B' }}>{deptName}</span>
        </div>
        <div>
          <img src={UserColorIcon} alt="user-icon-color" />
          <span style={{ fontSize: 13, marginLeft: 10, color: '#4B4B4B' }}>{fullName}</span>
        </div>
        <div style={{ display: 'flex' }}>
          <img src={EmailIcon} alt="email-icon-color" />
          <Typography.Paragraph
            style={{ width: '150px', fontSize: 13, margin: 0, marginLeft: 10, color: '#4B4B4B' }}
            ellipsis={{ rows: 1, tooltip: email }}
          >
            {email}
          </Typography.Paragraph>
        </div>
        <div style={{ marginBottom: 30 }}>
          <img src={PhoneIcon} alt="phone-icon-color" />
          <span style={{ fontSize: 13, marginLeft: 10, color: '#4B4B4B' }}>{phoneNumber}</span>
        </div>

        <Button
          onClick={onChangePass}
          size="middle"
          type="primary"
          className="group--botton--update"
          style={{ width: '100%', marginBottom: 10, height: 28, lineHeight: '16px' }}
        >
          Đổi mật khẩu
        </Button>

        <Button
          onClick={onLogout}
          size="middle"
          type="primary"
          className="group--botton--delete"
          style={{ width: '100%', height: 28, lineHeight: '16px' }}
        >
          Đăng xuất
        </Button>
        {/* <CDropdownItem href="#" onClick={onLogout}>
          <CIcon name="cil-lock-locked" className="me-2" />
          Đăng xuất
        </CDropdownItem> */}
      </CDropdownMenu>
      {isShowChangePassModal && <ChangePass isShow={isShowChangePassModal} setShow={setShowChangePassModal} />}
    </CDropdown>
  );
};

export default AppHeaderDropdown;
