import { CCard } from '@coreui/react';
import * as React from 'react';
import Logo from '../../../assets/image/logo-icx.svg';

interface Props {
  children: React.ReactElement;
  title: string;
}

export default function CustomCardLogin({ children, title }: Props) {
  return (
    <CCard style={{ borderColor: '#2E4960', boxShadow: '0px 0px 30px rgb(0 0 0 / 5%)' }}>
      <div
        className="bg__header--login"
        style={{
          minHeight: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 50px',
        }}
      >
        <div style={{ fontSize: '30px', fontWeight: 700, color: 'white', lineHeight: '35px' }}>{title}</div>
        <img style={{ width: '78.75px' }} src={Logo} alt="logo-login" />
      </div>
      {children}
    </CCard>
  );
}
