import { InputNumber } from 'antd';
import React from 'react';
import './style.scss';

interface PT {
  disabled?: boolean;
  defaultValue?: number;
  onChange?: () => void;
}

const InputNum: React.FC<PT> = ({ defaultValue, onChange, disabled }) => {
  return (
    <div className="customized-number-input">
      <InputNumber
        disabled={disabled}
        defaultValue={defaultValue}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => (value ? Number(value.replace(/\$\s?|(,*)/g, '')) : 0)}
        onChange={onChange}
      />
    </div>
  );
};

export default InputNum;
