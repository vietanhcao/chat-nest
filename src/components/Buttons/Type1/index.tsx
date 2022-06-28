import React from 'react';
import './style.scss';

interface PT {
  children: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler;
  buttonColor: string;
  disabled?: boolean;
}

export const CREATE = 'create';
export const UPDATE = 'update';
export const CANCEL = 'cancel';

const ButtonType1: React.FC<PT> = ({ children, className, onClick, buttonColor, disabled }) => {
  let convertedColor: string = '';
  switch (buttonColor) {
    case 'update':
      convertedColor = '#009CC1';
      break;

    case 'create':
      convertedColor = '#2EAD90';
      break;

    case 'cancel':
      convertedColor = '#c5c5c5';
      break;

    default:
      convertedColor = buttonColor;
      break;
  }
  return (
    <button
      className={`button-type-1 ${className ? className : ''} ${
        disabled ? 'button-type-1-disabled' : 'button-type-1-normal'
      }`}
      onClick={onClick}
      style={{ background: convertedColor }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonType1;
