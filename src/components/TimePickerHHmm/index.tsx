import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import './style.scss';

interface PT {
  className?: string;
  value?: string;
  onChange: (timeString: string) => void;
  disabled?: boolean;
  format?: string;
}

const TimePickerHHmm: React.FC<PT> = ({ className, value, onChange, disabled, format }) => {
  if (value)
    return (
      <TimePicker
        className={`time-picker ${className}`}
        value={moment(value, format ? format : 'HH:mm')}
        onChange={(time, timeString) => onChange(timeString)}
        format={format ? format : 'HH:mm'}
        disabled={disabled}
      />
    );
  else
    return (
      <TimePicker
        className={`time-picker ${className}`}
        onChange={(time, timeString) => onChange(timeString)}
        format={format ? format : 'HH:mm'}
        disabled={disabled}
      />
    );
};

export default TimePickerHHmm;
