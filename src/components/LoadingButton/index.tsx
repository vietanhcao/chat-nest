import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import './style.scss';

interface PT {
  isLoading: boolean;
  className?: string;
}

const LoadingButton: React.FC<PT> = ({ isLoading, className }) => {
  return (
    <LoadingOutlined
      className={`button-loading ${isLoading ? 'show-button-loading' : ''} ${className ? className : ''}`}
    />
  );
};

export default LoadingButton;
