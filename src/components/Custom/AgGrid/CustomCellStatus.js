import React from 'react';

export default function CustomCellStatus(props) {
  console.log(props);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {' '}
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          background: props.data?.author?.logined ? '#00D154' : '#D1D1D1',
          marginRight: 10,
        }}
      />{' '}
      <span>{props?.data?.author.lastName + ' ' + props.data?.author?.firstName}</span>
    </div>
  );
}
