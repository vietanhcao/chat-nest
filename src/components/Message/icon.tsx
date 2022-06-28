import React from 'react';
import './iconstyle.scss';

interface PT {
  type: string;
}

const Icon: React.FC<PT> = ({ type }) => {
  return <div className={`message-icon ${type === 'error' ? 'mess-error-icon' : 'mess-success-icon'}`}></div>;
};

export default Icon;
