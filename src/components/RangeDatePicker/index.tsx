import { DatePicker } from 'antd';
import React from 'react';
import './style.scss';

interface PT {
  onChangePickedDate: (e: any) => void;
  datePickerTitle: string;
}

const RangeDatePicker: React.FC<PT> = ({ onChangePickedDate, datePickerTitle }) => {
  return (
    <div className="date-picker">
      <div className="date-picker-title">{datePickerTitle}:</div>
      <DatePicker.RangePicker format="DD/MM/YYYY" onChange={onChangePickedDate} />
    </div>
  );
};

export default RangeDatePicker;
