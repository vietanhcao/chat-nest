import { Form, Tree } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

TreeControllerField.propTypes = {
  control: PropTypes.object,
  treeData: PropTypes.array,
  defaultValue: PropTypes.array,
  mode: PropTypes.string,
  height: PropTypes.string,
}

TreeControllerField.defaultProps = {
  size: 'middle',
  treeData: [],
  defaultValue: [],
  height: '400px',
}

function TreeControllerField(props) {
  const {
    control,
    name,
    validateStatus,
    // onCheck,
    // checkedKeys,
    onSelect,
    selectedKeys,
    treeData,
    setValue,
    height,
  } = props

  const onCheck = (e) => {
    console.log('setvalue', e)
    console.log('name', name)
    setValue(name, e, { shouldValidate: true })
  }

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => {
        // console.log('current value', field.value)
        return (
          <Form.Item validateStatus={validateStatus && 'error'} help={validateStatus}>
            <div
              style={{
                height: height,
                overflowY: 'auto',
                border: '1px solid lightgray',
                padding: '10px 0',
              }}
            >
              <Tree
                checkable
                // expandedKeys={'admin-user-1-key'}
                // {...field}
                autoExpandParent={true}
                onCheck={onCheck}
                checkedKeys={field.value}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
                treeData={treeData}
              />
            </div>
          </Form.Item>
        )
      }}
    />
  )
}
export default TreeControllerField
