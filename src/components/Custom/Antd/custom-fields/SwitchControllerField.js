import { Form, Switch } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

SwitchControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
}

SwitchControllerField.defaultProps = {
  size: 'middle',
  disabled: false,
  defaultChecked: false,
}

function SwitchControllerField(props) {
  const {
    control,
    name,
    validateStatus,
    defaultChecked,
    disabled,
    style,
    setValue,
    defaultValue,
  } = props

  const onChange = (v) => {
    setValue(name, v, { shouldValidate: true })
  }

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <Form.Item
            style={{ ...style, margin: 0 }}
            validateStatus={validateStatus && 'error'}
            help={validateStatus}
          >
            <Switch
              defaultChecked={defaultChecked}
              disabled={disabled}
              {...field}
              onChange={onChange}
              checked={field.value}
            />
          </Form.Item>
        )
      }}
    />
  )
}
export default SwitchControllerField
