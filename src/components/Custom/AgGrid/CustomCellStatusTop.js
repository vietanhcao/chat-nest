import React from 'react';

export default function CustomCellStatusTop(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {' '}
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          background: props.data?.user?.logined ? '#00D154' : '#D1D1D1',
          marginRight: 10,
        }}
      />{' '}
      <span>{(props?.data?.user.lastName || '-') + ' ' + (props.data?.user?.firstName || '-')}</span>
    </div>
  );
}
