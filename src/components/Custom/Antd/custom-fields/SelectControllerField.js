import { Form, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

SelectControllerField.propTypes = {
  control: PropTypes.object,
  size: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validateStatus: PropTypes.string,
  listOption: PropTypes.array,
  mode: PropTypes.string,
  showSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

SelectControllerField.defaultProps = {
  size: 'middle',
  listOption: [],
  defaultValue: null,
  mode: null,
  showSearch: false,
};

function SelectControllerField(props) {
  const {
    style,
    control,
    name,
    validateStatus,
    listOption,
    placeholder,
    size,
    defaultValue,
    mode,
    onChange,
    value,
    disabled,
    optionFilterProp,
    showSearch,
    children,
  } = props;

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Form.Item style={style} validateStatus={validateStatus && 'error'} help={validateStatus}>
          <Select
            size={size}
            mode={mode}
            {...field}
            placeholder={placeholder}
            optionFilterProp={optionFilterProp}
            notFoundContent="Không tìm thấy kết quả phù hợp"
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            // defaultValue={defaultValue}
            showSearch={showSearch}
            value={value !== undefined ? value : field.value}
            onChange={onChange ? onChange : field.onChange}
            disabled={disabled}
          >
            {children // add children
              ? children
              : listOption.map((e, i) => (
                  <Select.Option key={i} value={e.value}>
                    {e.name}
                  </Select.Option>
                ))}
          </Select>
        </Form.Item>
      )}
    />
  );
}
export default SelectControllerField;
