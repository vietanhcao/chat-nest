import { Form, Select, Tag } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

SelectTagControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  listOption: PropTypes.array,
  defaultValue: PropTypes.array,
  mode: PropTypes.string,
}

SelectTagControllerField.defaultProps = {
  size: 'middle',
  listOption: [],
  defaultValue: [],
  mode: 'multiple',
}

function tagRender(props) {
  const { label, closable, onClose } = props
  const onPreventMouseDown = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={'#45A3FB'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}

function SelectTagControllerField(props) {
  const { control, name, validateStatus, listOption, placeholder, size, mode, setValue } = props
  const onChange = (v) => {
    setValue(name, v, { shouldValidate: true })
  }

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item validateStatus={validateStatus && 'error'} help={validateStatus}>
          <Select
            placeholder={placeholder}
            mode={mode}
            allowClear
            showArrow
            tagRender={tagRender}
            value={field.value}
            options={listOption}
            size={size}
            {...field}
            onChange={setValue ? onChange : field.onChange}
          />
        </Form.Item>
      )}
    />
  )
}
export default SelectTagControllerField
