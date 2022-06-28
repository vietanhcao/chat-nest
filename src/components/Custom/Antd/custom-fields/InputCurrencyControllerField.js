import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { Input, Form, InputNumber } from 'antd'
import CurrencyInput from 'src/components/InputCustom/CurrencyInput'

InputCurrencyControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
}

InputCurrencyControllerField.defaultProps = {
  size: 'middle',
  disabled: false,
  min: 0,
  addonBefore: null,
}

function InputCurrencyControllerField(props) {
  const {
    control,
    name,
    validateStatus,
    type,
    placeholder,
    prefix,
    size,
    disabled,
    style,
    styleInput,
    onChange,
    min,
    max,
    value,
    addonBefore,
  } = props

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item style={style} validateStatus={validateStatus && 'error'} help={validateStatus}>
          <CurrencyInput
            style={{ borderColor: validateStatus && 'error' ? 'red' : '' }}
            className="form-control"
            // onChange={(event) => {
            //   this.validationLength({
            //     value: event.target.value,
            //     stateName: 'defaultPositionLimit',
            //     regexString: /.{1,15}/,
            //   })
            // }}
            // size={size}
            disabled={disabled}
            placeholder={placeholder}
            {...field}
            // onChange={onChange ? onChange : field.onChange}
          />
        </Form.Item>
      )}
    />
  )
}
export default InputCurrencyControllerField
