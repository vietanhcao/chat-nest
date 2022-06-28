import React from 'react';
import { Select } from 'antd';
import './style.scss';

interface PT {
  list: { value: string; name: string }[];
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const DropdownSelect: React.FC<PT> = ({ list, defaultValue, className, disabled, onChange }) => {
  // console.log(list);
  return (
    <Select
      dropdownClassName={`dropdown-select-container ${className}`}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={(a: any) => {
        if (onChange) onChange(a);
      }}
    >
      {list.map((value) => (
        <Select.Option key={value.value} value={value.value}>
          {value.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DropdownSelect;
