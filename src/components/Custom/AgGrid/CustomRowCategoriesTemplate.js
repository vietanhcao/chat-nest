import React from 'react';

export default (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '48px' }}>
      {props?.value?.map((o, i) => {
        return (
          <div
            style={{
              marginRight: 5,
              backgroundColor: '#45A3FB',
              color: 'white',
              padding: '0 5px',
              display: 'flex',
              height: '25px',
              borderRadius: 5,
              alignItems: 'center',
            }}
            key={i}
          >
            {o.name}
          </div>
        );
      })}
    </div>
  );
};
