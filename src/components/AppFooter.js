import React from 'react';
import { CFooter } from '@coreui/react';

const AppFooter = () => {
  return (
    <CFooter>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a> */}
        <span className="ms-1" style={{ borderRight: '1px solid #8080807a', paddingRight: '15px' }}>
          &copy; 2021 ICX
        </span>
        <span
          style={{
            paddingRight: '15px',
            marginLeft: '15px',
            fontSize: 16,
            borderRight: '1px solid #8080807a',
          }}
          className="d-flex justify-content-center  align-items-center"
        >
          Version Name: v210914.1
        </span>
        <span
          style={{
            paddingRight: '15px',
            marginLeft: '15px',
            fontSize: 16,
          }}
          className="d-flex justify-content-center  align-items-center"
        >
          Version Date: 20210914.1950
        </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Newgen</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
