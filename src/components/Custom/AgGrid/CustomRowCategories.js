import React from 'react';

const CustomRowCategories = (props) => {
  return (
    <div>
      {props?.value?.map((o, i) => {
        if (props.colDef.subfield !== 'categoryName') {
          // danh-muc-2.create
          const lastKey = Object.keys(o)[Object.keys(o).length - 1];
          const getParentKey = lastKey.split('_')[0];
          const currentKey = getParentKey + '_' + props.colDef.subfield;
          return (
            <div key={i} style={{ marginLeft: 5, height: 30, display: 'flex', alignItems: 'center' }}>
              {o[currentKey] ? (
                <i className="fa fa-check" style={{ color: '#3CBC7F', fontSize: 13 }}></i>
              ) : (
                <i className="fa fa-ban" style={{ color: '#F45C6E', fontSize: 13 }}></i>
              )}
            </div>
          );
        } else if (typeof o[props.colDef.subfield] == 'string') {
          return (
            <div key={i} style={{ height: 30, display: 'flex', alignItems: 'center' }}>
              {o[props.colDef.subfield]}
            </div>
          );
        }
        return (
          <div key={i} style={{ height: 30, display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-ban" style={{ color: '#F45C6E', fontSize: 13 }}></i>{' '}
          </div>
        );
      })}
    </div>
  );
};

export default CustomRowCategories;
