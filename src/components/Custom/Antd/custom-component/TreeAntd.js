import { Tree } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

TreeAntd.propTypes = {
  onCheck: PropTypes.func,
  checkedKeys: PropTypes.array,
  onSelect: PropTypes.func,
  selectedKeys: PropTypes.array,
  treeData: PropTypes.array,
  checkable: PropTypes.bool,
  disabled: PropTypes.bool,
};

TreeAntd.defaultProps = { treeData: [], selectedKeys: [], checkedKeys: [], checkable: true, disabled: false };

function TreeAntd(props) {
  const { onCheck, checkedKeys, onSelect, selectedKeys, treeData, disabled, checkable } = props;

  return (
    <div
      style={{
        height: '400px',
        overflowY: 'auto',
        border: '1px solid lightgray',
        padding: '10px 0',
      }}
    >
      <Tree
        checkable={checkable}
        // expandedKeys={'admin-user-1-key'}
        disabled={disabled}
        autoExpandParent={true}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={treeData}
      />
    </div>
  );
}
export default TreeAntd;
