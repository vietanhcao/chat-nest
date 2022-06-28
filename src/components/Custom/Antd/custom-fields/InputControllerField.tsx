import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Input, Form, InputNumber } from 'antd';

// InputControllerField.propTypes = {
//   control: PropTypes.object,
//   size: PropTypes.string,
//   disabled: PropTypes.bool,
//   min: PropTypes.number,
//   max: PropTypes.number,
//   name: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   validateStatus: PropTypes.string,
//   prefix: PropTypes.element,
//   addonBefore: PropTypes.element,
// };

interface InputControllerFieldProps {
  control: any;
  value?: any;
  name: string;
  size?: any;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  validateStatus?: string;
  prefix?: any;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<any>;
}

const InputControllerFieldDefaultProps = {
  size: 'middle',
  disabled: false,
  min: 0,
  addonBefore: null,
  type: 'text',
  styleInput: { borderRadius: 4 },
};

InputControllerField.defaultProps = InputControllerFieldDefaultProps;

function InputControllerField(props: InputControllerFieldProps & typeof InputControllerFieldDefaultProps) {
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
  } = props;

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item style={style} validateStatus={validateStatus && 'error'} help={validateStatus}>
          {type === 'password' && (
            <Input.Password
              addonBefore={addonBefore}
              disabled={disabled}
              size={size}
              style={styleInput}
              placeholder={placeholder}
              type={type}
              height={100}
              prefix={prefix}
              {...field}
              onChange={onChange ? onChange : field.onChange}
            />
          )}

          {type === 'number' && (
            <InputNumber
              // addonBefore={addonBefore}
              disabled={disabled}
              size={size}
              style={{ width: '100%', ...styleInput }}
              placeholder={placeholder}
              type={type}
              min={min}
              max={max}
              prefix={prefix}
              {...field}
              value={value !== undefined ? value : field.value}
            />
          )}
          {type === 'text' && (
            <Input
              addonBefore={addonBefore}
              disabled={disabled}
              size={size}
              style={styleInput}
              placeholder={placeholder}
              type={type}
              height={100}
              prefix={prefix}
              {...field}
              onChange={onChange ? onChange : field.onChange}
            />
          )}
        </Form.Item>
      )}
    />
  );
}
export default InputControllerField;
