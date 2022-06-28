import { Checkbox, Form } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

CheckBoxControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
}

CheckBoxControllerField.defaultProps = { size: 'middle', disabled: false, label: null }

function CheckBoxControllerField(props) {
  const { control, name, validateStatus, label, disabled, style } = props

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Form.Item
            style={{ ...style, margin: 0 }}
            validateStatus={validateStatus && 'error'}
            help={validateStatus}
          >
            <Checkbox {...field} checked={field.value} disabled={disabled}>
              {label}
            </Checkbox>
          </Form.Item>
        )
      }}
    />
  )
}
export default CheckBoxControllerField
