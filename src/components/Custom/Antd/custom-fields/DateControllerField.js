import { DatePicker, Form } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

DateControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  showTime: PropTypes.bool,
  allowClear: PropTypes.bool,
  format: PropTypes.string,
}

DateControllerField.defaultProps = {
  size: 'middle',
  showTime: false,
  format: 'DD/MM/YYYY',
  allowClear: true,
}

function DateControllerField(props) {
  const {
    control,
    name,
    validateStatus,
    placeholder,
    size,
    setValue,
    showTime,
    format,
    style,
    disabled,
    allowClear,
  } = props
  const onChange = (v, e) => {
    console.log(v.seconds(0).milliseconds(0), e)
    setValue(name, v.seconds(0).milliseconds(0), { shouldValidate: true })
  }

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item validateStatus={validateStatus && 'error'} help={validateStatus} style={style}>
          <DatePicker
            format={format}
            // disabledDate={(current) => current && current > moment().endOf('day')}
            style={{ width: '100%' }}
            // showTime={{ format: 'HH:mm' }}
            disabled={disabled}
            size={size}
            {...field}
            onChange={onChange}
            placeholder={placeholder}
            showTime={showTime}
            allowClear={allowClear}
          />
        </Form.Item>
      )}
    />
  )
}
export default DateControllerField
