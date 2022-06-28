import React from 'react';

export default (props) => {
  return (
    <div>
      {props?.value?.map((o, i) => {
        return (
          <div style={{ height: 30 }} key={i}>
            {o}
          </div>
        );
      })}
    </div>
  );
};
