import { Checkbox } from 'antd';
import React from 'react';

export default (props) => {
  const onChange = (e) => {
    if (e.target.checked) {
      console.log('select All');
      props.api.forEachNode(function (node) {
        node.setSelected(true);
      });
    } else {
      console.log('deselect All');
      props.api.deselectAll();
    }
  };

  return (
    <div>
      <Checkbox style={{ whiteSpace: 'nowrap' }} onChange={onChange}>
        <div className="customHeaderLabel">{props.displayName}</div>
      </Checkbox>
    </div>
  );
};
