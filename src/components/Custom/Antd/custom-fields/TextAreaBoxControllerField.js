import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

const { TextArea } = Input;

TextAreaBoxControllerField.propTypes = {
  control: PropTypes.object,
  style: PropTypes.object,
  size: PropTypes.string,
  name: PropTypes.string,
  validateStatus: PropTypes.string,
  height: PropTypes.any,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  setValue: PropTypes.func,
};

TextAreaBoxControllerField.defaultProps = { size: 'middle', disabled: false, rows: 4 };

function TextAreaBoxControllerField(props) {
  const { control, name, validateStatus, rows, disabled, style, height } = props;

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Form.Item
            style={{ ...style, marginLeft: 10 }}
            validateStatus={validateStatus && 'error'}
            help={validateStatus}
          >
            <TextArea disabled={disabled} rows={rows} style={{ height }} {...field} />
          </Form.Item>
        );
      }}
    />
  );
}
export default TextAreaBoxControllerField;
